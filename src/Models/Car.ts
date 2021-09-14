import { Schema, model, Document } from 'mongoose'

export interface ICar extends Document {
    brand: string,
    model: string,
    year: string,
    fuel: number,
    color: string,
    automatic?: boolean
}

const CarSchema = new Schema ({
  brand: { type: String },
  model: { type: String },
  year: { type: String },
  fuel: {type: Number},
  color: { type: String},
  automatic:{type: Boolean, default: false},
  created_at: { type: Date, default: Date.now },
  updated_at: {type: Date, default: Date.now}
})

export default model<ICar>('cars', CarSchema)