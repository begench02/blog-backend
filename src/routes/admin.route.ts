import { adminSignIn, getRefreshToken } from '@controllers/admin.controller'
import { Router } from 'express'

const router = Router()

router.post('/sign-in', adminSignIn)
router.get('/refresh-token', getRefreshToken)

export default router
