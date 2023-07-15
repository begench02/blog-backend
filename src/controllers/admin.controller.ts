import { Admin } from '@models/admin.model'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const adminSignIn = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        const admin = await Admin.findOne({ email })
        if (!admin) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            })
        }

        const isMatch = bcrypt.compareSync(password, admin.password)
        if (isMatch) {
            const access_token = jwt.sign({ email: admin.email }, process.env.access_token_secret, { expiresIn: '1h' })
            const refresh_token = jwt.sign({ email: admin.email }, process.env.refresh_token_secret)
            return res.json({ success: true, message: 'Successfully signed in', access_token, refresh_token })
        }
    } catch {
        return res.json('Error')
    }
}

export const getRefreshToken = async (req: Request, res: Response) => {
    const refresh_token = req.headers.authorization
    return res.json('Something')
    console.log('Refresh token: ', refresh_token)
}
