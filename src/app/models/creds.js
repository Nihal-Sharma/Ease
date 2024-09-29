import mongoose , {Schema} from "mongoose";

const credSchema = new Schema({
    username : String,
    password : String,
    email : String,
    uid : Number
})

const creds =mongoose.models.creds ||  mongoose.model("creds" , credSchema);
export default creds