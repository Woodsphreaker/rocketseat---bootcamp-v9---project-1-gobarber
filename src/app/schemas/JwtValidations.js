import mongoose from 'mongoose'

const JwtValidationSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
    userID: {
      type: Number,
      required: true,
    },
    isValid: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('JwtValidation', JwtValidationSchema)
