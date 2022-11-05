import crypto from 'crypto'
  
// Difining algorithm
const algorithm = 'aes-256-cbc';
  
// Defining key
const key = crypto.randomBytes(32);

console.log({ key, new: Buffer.from(key).toString('base64')})
  
// Defining iv
const iv = crypto.randomBytes(16)

export const encrypt = (text: any) => {
    let cipher = crypto.createCipheriv('aes-256-ocb', Buffer.from(key), iv)
    let encrypted = cipher.update(text, "utf-8");
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    
    return { iv: iv.toString('hex'),  encryptedData: encrypted.toString('hex') };
}

// A decrypt function
export const decrypt = (text: any) => {
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');
    
    // Creating Decipher
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    // Updating encrypted text
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    
    // returns data after decryption
    return { iv: text.iv, text: decrypted.toString() }
}
