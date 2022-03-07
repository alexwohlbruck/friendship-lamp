import express from 'express'
import { UserModel } from '../models/user'

const router = express.Router()

router.get('/', async (req, res) => {
  const users = await UserModel.find()

  try {
    res.send(users)
  }
  catch (err) {
    res.status(500).send(err)
  }
})

export default router
