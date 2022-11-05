import express from 'express'
import messageCtrl from './messageCtrl'
const router = express.Router()

router.route('/messages')
    .get(messageCtrl.getMessages)
    .post(messageCtrl.createMessage)

export default router