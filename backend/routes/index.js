import { Router } from 'express'
import conceptsRoutes from './concepts.js'
import innovationsRoutes from './innovations.js'
import analyticsRoutes from './analytics.js'

const router = Router()

router.use('/concepts', conceptsRoutes)
router.use('/innovations', innovationsRoutes)
router.use('/analytics', analyticsRoutes)

export default router
