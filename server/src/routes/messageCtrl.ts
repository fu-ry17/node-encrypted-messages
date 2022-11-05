import { Request, Response } from 'express'
import Messages from '../models/MessageModel'
import { decryptMessage, encryptMessage } from '../utils'

const messageCtrl = {
   getMessages: async(req: Request, res: Response) => {
     try {
        const messages = await Messages.find({}).sort('-createdAt')
        let responseMessage: any[] = []

        messages.map(m => {
           let newMsg = { ...m._doc, text: decryptMessage(m.text)}
           responseMessage.push(newMsg)
        })

        return res.status(200).json({ messages: responseMessage })
     } catch (error: any) {
        return res.status(500).json({ msg: error.message })
     }
   },
   createMessage: async (req: Request, res: Response) => {
      try {
        const { text } = req.body
        
        let newMessage = new Messages({ text: encryptMessage(text) })
        await newMessage.save()
       
        return res.status(200).json({ newMessage })

      } catch (error: any) {
        return res.status(500).json({ msg: error.message })
      }
   }
}

export default messageCtrl