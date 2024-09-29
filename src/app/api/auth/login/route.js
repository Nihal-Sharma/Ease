import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"

import connectdb from "@/lib/connectdb";
import creds from "@/app/models/creds";
import { user } from "@nextui-org/react";
connectdb();
export  async function POST(request){
    


    const {username , password }= await request.json()
    
    const credentials = await creds.findOne({username : username , password : password})
    if (credentials ){
        const token =  jwt.sign({uid : credentials.uid} ,"easeai" )
        // try{
        //     var decoded = jwt.verify(token , 'easea')
        //  }
        // catch(err){
        //     var decoded = "Not verified"
        // }
        
        
       return NextResponse.json({ details : credentials , token : token })
    }
    else {
       return NextResponse.json({message : "Not Found"})
    }


}
export function GET(req , res){
    return NextResponse.json("Get")
}