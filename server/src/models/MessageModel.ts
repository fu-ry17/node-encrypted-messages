import mongoose, { Document } from "mongoose";

export interface IMessage extends Document {
    _doc: object,
    text: string
}

const messageSchema = new mongoose.Schema({
     text: {
        type: String,
        required: true
     }
}, {
    timestamps: true
})

const Messages = mongoose.model<IMessage>('messages', messageSchema)

export default Messages