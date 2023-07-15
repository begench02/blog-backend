import { Router } from 'express'
import { addArticle, deleteArticle, getArticle, getArticles, updateArticle } from '@controllers/articles.controller'

const router = Router()

router.route('/').get(getArticles).post(addArticle)
router.route('/:id').get(getArticle).put(updateArticle).delete(deleteArticle)

export default router