const mongoose=require("mongoose")

const dbconnection=async()=>{
      try{
       await mongoose.connect(process.env.DB_URL)
        console.log("Database connected")
      }catch(err){
           console.log(err.message);
      }
}
module.exports=dbconnection