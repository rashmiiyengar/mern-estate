import mongoose from "mongoose";

const userSChema = new mongoose.Schema({
  username: {
    type: String,
    required:true,
    unique:true
  },
  email: {
    type: String,
    required:true,
    unique:true
  },
  password: {
    type: String,
    required:true
    
  },
  avatar:{
    type:String,
    default:"https://freeiconshop.com/wp-content/uploads/edd/person-flat.png",
  }
},{timestamps:true});


const User = mongoose.model("User",userSChema);

export default User;