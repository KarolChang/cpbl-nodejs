import express from 'express'
import { Request, Response } from 'express'
const todayGameController = require('../../controllers/todayGameController')

const router = express.Router()

router.get('/', (req: Request, res: Response) => res.render('todayGame'))

router.post('/', todayGameController.getTodayGame)

module.exports = router