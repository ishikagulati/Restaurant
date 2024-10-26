import mongoose from 'mongoose'

export const dbConnection=()=>{
    moongose.connect(process.env.MONGO_URL,
        {
            dbNamE
        }
    )
}