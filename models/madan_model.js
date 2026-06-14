const connectMongo = require("../mongoclient/mongodb_client")


class MadanModel {

    getAll = async()=>{
        try {
            const db = await connectMongo()
            const collection = db.collection("cafemadan")
            const result = await collection.find({}).toArray()
            return result
        } catch (error) {
            console.log("Error: ",error)
        }
    }


    getByName = async(name)=>{
        try {
            const db = await connectMongo()
            const collection = db.collection("cafemadan")
            const result = await collection.findOne({name})
            return result
        } catch (error) {
            console.log("Error: ",error)
        }
    }


    getByFactoryName = async(factoryname)=>{
        try {
            const db = await connectMongo()
            const collection = db.collection("cafemadan")
            const result = await collection.findOne({factoryname})
            return result
        } catch (error) {
            console.log("Error: ",error)
        }
    }


    getByEmail = async(email)=>{
        try {
            const db = await connectMongo()
            const collection = db.collection("cafemadan")
            const result = await collection.findOne({email})
            return result
        } catch (error) {
            console.log("Error: ",error)
        }
    }


    getByPhone = async(phone)=>{
        try {
            const db = await connectMongo()
            const collection = db.collection("cafemadan")
            const result = await collection.findOne({phone})
            return result
        } catch (error) {
            console.log("Error: ",error)
        }
    }


    getByMessage = async(message)=>{
        try {
            const db = await connectMongo()
            const collection = db.collection("cafemadan")
            const result = await collection.findOne({message})
            return result
        } catch (error) {
            console.log("Error: ",error)
        }
    }


    addInfo = async(name,factoryname,email,phone,message)=>{
        try {
            const db = await connectMongo()
            const collection = db.collection("cafemadan")
            const result = await collection.insertOne({name,factoryname,email,phone,message})
            return result
        } catch (error) {
            console.log("Error: ",error)
        }
    }

}


module.exports = new MadanModel()