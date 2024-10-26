import mongoose from 'mongoose'

export const dbConnection=()=>{
    moongose.connect(process.env.MONGO_URL,
        {
            dbName:"Restaurant",
        }
    ).then(()=>{
        console.log("connected to database");
    })
    .catch((err)={})
}