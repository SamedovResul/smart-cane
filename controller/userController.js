import userDataSchema from "../models/userData.js";


export const userGet = async (req,res) =>{

  try {
    const UserData = await userDataSchema.find()


    res.status(201).json(UserData)
  } catch (error) {
    res.status(500).json(error.message)
  }
}


export const userPost = async (req,res) =>{
  const {lat,lang} = req.body
  console.log(lat,lang)
  try {
    const userData = userDataSchema({
      lat:lat,
      lang:lang
    })

    await userData.save();

    res.status(201).json(userData)
  } catch (error) {
    res.status(500).json(error.message)
  }
}