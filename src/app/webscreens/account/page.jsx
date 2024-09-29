"use client";
import { useStore } from '@/app/Store/Store'
import React from 'react'

const page = () => {
  const dataAvailable = useStore((state)=>(state.dataAvailable))
  const details = useStore((state)=> state.details)
  const token = localStorage.getItem("token")
  useEffect(()=>{
    if (dataAvailable ===true){
      console.log("Data Already Exists")
    }
    else{
      if(token){
        console.log("request sent for details via token")
      }
    }
  },[])
   
  return (
    <div>welcome {details.username}</div>
  )
}

export default page