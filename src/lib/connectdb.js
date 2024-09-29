import mongoose, { mongo } from "mongoose";
const dbconnection = {isConnected : false}

// export default async function  connectdb(){
//     if (dbconnection.isConnected === false){
//     const db = mongoose.connect(process.env.MONGODB_URI , {dbName : "employee"})
//     .then(()=>{console.log(db); dbconnection.isConnected = true})
//     .catch((err)=>{console.log(err)})}
//     else{
//         console.log("Already Connected")
//     }
// }
export default async function connectdb(){
    if(dbconnection.isConnected === false){
        console.log("Trying to connect")
        try{
            const {connection} = await mongoose.connect(process.env.MONGODB_URI , {dbName :'employee'})
            console.log("Database connected")
            // console.log(connection)
            dbconnection.isConnected = true
        }
        catch(err){
            console.log(err)
        }
    }
    else{
        console.log( "already connection : ", dbconnection.isConnected)
    }
}

