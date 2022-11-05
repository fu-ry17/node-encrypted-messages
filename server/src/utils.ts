const crypto  = require('crypto-js')

let key = `${process.env.CRYPTO_KEY}`

export const encryptMessage = (text: string) => {
    return crypto.AES.encrypt(text, key).toString()
}

export const decryptMessage = (text: string) => {
    var bytes  = crypto.AES.decrypt(text, key);
    var originalText = bytes.toString(crypto.enc.Utf8)
    return originalText
}