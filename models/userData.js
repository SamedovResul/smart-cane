import mongoose from "mongoose";

const userData = mongoose.Schema({
  lang:{
    type:Number,
  },
  lat:{
    type:Number,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const userDataSchema = mongoose.model("userData", userData)

export default userDataSchema