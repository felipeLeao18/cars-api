import { Schema, model, Document } from 'mongoose'

import bcrypt from 'bcryptjs'

export interface IUser extends Document {
    name: string,
    last_name: string,
    email: string,
    password: string,
    admin?: boolean

}

const UserSchema = new Schema({

  name: { type: String },
  last_name: {type: String},
  email: { type: String },
  password: { type: String },
  admin: {type: Boolean, default: false},
  created_at: { type: Date, default: Date.now },
  updated_at: {type: Date, default: Date.now}

})

UserSchema.pre('save', async function (next) {
  const hashPassword = await bcrypt.hash(this.password, 10)

  this.password = hashPassword
  next()
})

export default model<IUser>('users', UserSchema)
