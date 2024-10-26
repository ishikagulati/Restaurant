import mongoose from 'mongoose'

export const dbConnection=()=>{
    moongose.connect(process.env.MONGO_URL,
        {
            dbName:"Restaurant",
        }
    ).then(()=>{
        console.log("connected to database");
    })
    .catch((err)=>{
        console.log(`some error occured while connecting to database : `)
    })
}