import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import  CredentialsProvider  from 'next-auth/providers/credentials'
import connectMongo from '../../../database/conn'
import Users from '../../../model/schema'
import { compare } from 'bcrypt'


export default NextAuth({
    providers: [
    
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
      }),
      CredentialsProvider({
        name:"Credentials",
        async authorize(credentials,req){
          connectMongo().catch(err=>{error:"Connection Failed...!"})

          const result = await Users.findOne({email:credentials.email})
          if(!result){
            throw new Error("No user Found With Email Please Register...!")
          }

          const checkPassword = await compare(credentials.password , result.password)

          if(!checkPassword || result.email !== credentials.email){
            throw new Error(" Email and Password Doesnt Match...!")

          }
          return result;
        }
      })
      
    ]
  })