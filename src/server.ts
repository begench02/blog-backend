import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import adminRoutes from '@routes/admin.route'
import articlesRoutes from '@routes/articles.route'
import cookieParser from 'cookie-parser'
import 'module-alias/register'

dotenv.config()

const app = express()
app.use(cookieParser())
app.use(cors({ credentials: true, origin: 'http://127.0.0.1:5173' }))

const dbUrl = process.env.DB_URL || ''
mongoose.connect(dbUrl).then(() => console.log('MongoDB Connected!'))

app.use(express.json())

app.use('/admin', adminRoutes)
app.use('/articles', articlesRoutes)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log('Running!!'))
