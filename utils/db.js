import mongoose from "mongoose";

import "dotenv/config";

const db=()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log("DB connected"))
    .catch((err)=>console.log(err));

}

export default db;