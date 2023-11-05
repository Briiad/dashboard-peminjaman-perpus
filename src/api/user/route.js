import connectDB from "@/database"
import User from "@/models/user"
import { NextResponse } from "next/server"


export async function POST(req){
  try {
    await connectDB()
    const { email, name } = await req.json()

    const newUser = await User.create({
      email,
      name
    })

    if (newUser){
      return NextResponse.json({
        success: true,
        message: 'User created'
      })
    } else {
      return NextResponse.json({
        success: false,
        message: 'User already exist'
      })
    
    }

  } catch (error) {
    console.log(error)

    return NextResponse.json({
      success: false,
      message: 'Something went wrong'
    })
  }
}