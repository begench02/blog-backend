import mongoose from 'mongoose'

const ArticleSchema = new mongoose.Schema(
    {
        title: String,
        body: String,
        comments: [
            {
                body: String,
                date: Date
            }
        ],
        votes: Number,
        date: {
            type: Date,
            default: Date.now()
        }
    },
    {
        versionKey: false
    }
)

export const Article = mongoose.model('Article', ArticleSchema)
