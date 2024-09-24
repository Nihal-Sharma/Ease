import { NextResponse } from "next/server";

const _username = "nihal";
const _password = "nihal";

export  async function POST(request){
    const req = await request.json()
    if(req.username === _username && req.password === _password){
        return NextResponse.json("Password Matched")
    }
   else {
    return NextResponse.json("Authentication failed")
   }
}
export function GET(req , res){
    return NextResponse.json("Get")
}