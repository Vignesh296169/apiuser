const mainroute=require("express").Router()

const User=require("../model/usermodel")

mainroute.post("/submit",async(req,res)=>{
   
   try{
        const user=new User(req.body)
            await user.save()
        res.json({message:"user successfully created"})
   }catch(e){
        console.log(e.message)
   }
})
mainroute.get("/fetch",async(req,res)=>{
   
   try{
           const user=await User.find({})
        res.json({users:user})
   }catch(e){
        console.log(e.message)
   }
})


module.exports=mainroute