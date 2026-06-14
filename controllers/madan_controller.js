const MadanModel = require("../models/madan_model")
const Joi = require("joi")


const registerschema = Joi.object({
    name:Joi.string().min(3).max(30).required(),
    factoryname:Joi.string().required(),
    email:Joi.string().email().required(),
    phone:Joi.string().max(12).required(),
    message:Joi.string().max(110).required()
})


const validate = (schema, data) => schema.validate(data)

const getAll = async(req,res)=>{
    try {
        const madan = await MadanModel.getAll()
        res.json(madan)
    } catch (error) {
        console.error("Error: ",error)
        return res.status(500).send("Err in server")
    }
}

const addInfo = async(req,res)=>{

    const {error} = validate(registerschema, req.body)

    if (error) {
        return res.status(400).json({message: error.details[0].message})
    }

    const {name,factoryname,email,phone,message} = req.body

    

    try {
        
        const result = await MadanModel.addInfo(name,factoryname,email,phone,message)

        if (!result) {
            return res.status(400).send("Err in save information")
        }

        const user = await MadanModel.getByEmail(email)

        if (!user) {
            return res.status(403).send("Err in get email")
        }


        return res.status(200).json({
            message:"اطلاعات شما با موفقیت ثبت شد"
        })

    } catch (error) {
        console.error("Error: ",error)
        return res.status(500).send("Err in server")
    }

}

module.exports = {
    getAll,addInfo
}