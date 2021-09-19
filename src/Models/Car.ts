import { Schema, model, Document } from 'mongoose'

export interface ICar extends Document {
    image: string,
    brand: string,
    model: string,
    year: string,
    fuel: number,
    color: string,
    automatic?: boolean
}

const CarSchema = new Schema ({
  image: {type: String},
  brand: { type: String },
  model: { type: String },
  year: { type: String },
  fuel: {type: Number},
  color: { type: String},
  automatic:{type: Boolean, default: false},
  average_grade: {type: Number, default: 0},
  created_at: { type: Date, default: Date.now },
  updated_at: {type: Date, default: Date.now}
})

export default model<ICar>('cars', CarSchema)