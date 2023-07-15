import { Article } from '@models/article.model'
import { Request, Response } from 'express'

export const getArticles = async (req: Request, res: Response) => {
    try {
        const articles = await Article.find()
        return res.status(200).json(articles)
    } catch (error: any) {
        return res.status(500).json({
            error: `Error: ${error.message}`
        })
    }
}

export const getArticle = async (req: Request, res: Response) => {
    try {
        const article = await Article.findById(req.params.id)
        return res.status(200).json(article)
    } catch (error) {
        return
    }
}

export const deleteArticle = async (req: Request, res: Response) => {
    try {
        const article = await Article.findByIdAndDelete(req.params.id)
        return res.status(204).json(article)
    } catch (error) {
        return
    }
}

export const addArticle = async (req: Request<TAddArticleRequest>, res: Response) => {
    try {
        const { title, body } = req.body
        await Article.create({ title, body })
        return res.status(201).json({
            success: true,
            message: 'Created successfully'
        })
    } catch (error) {
        return
    }
}

export const updateArticle = async (req: Request, res: Response) => {
    try {
        const { title, body } = req.body
        const article = await Article.findOneAndUpdate({ _id: req.params.id }, { title, body }, { upsert: true })
        if (!article) {
            return res.status(500).json({ error: 'Error' })
        }
        return res.status(200).json({ message: 'Updated successfully' })
        //  (err, doc) => {
        //     if (err) return res.status(500).json({ error: err })
        //     return res.status(204).json({ message: 'Updated successfully' })
        // })
    } catch (error) {}
}

// Types
type TAddArticleRequest = {
    title: string
    body: string
}
