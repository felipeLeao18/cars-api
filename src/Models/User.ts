import { Schema, model, Document } from 'mongoose'

import bcrypt from 'bcryptjs'

export interface IUser extends Document {
    name: string,
    email: string,
    password: string

}

const UserSchema = new Schema({

  name: { type: String },
  email: { type: String },
  password: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: {type: Date, default: Date.now}

})

UserSchema.pre('save', async function (next) {
  const hashPassword = await bcrypt.hash(this.password, 10)

  this.password = hashPassword
  next()
})

export default model<IUser>('users', UserSchema)
