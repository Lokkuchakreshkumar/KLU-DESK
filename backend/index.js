import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose"
import pdf from "./models/pdf.js"
import cors from "cors"
dotenv.config()

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());
async function mongo_cnct(){
    await mongoose.connect(process.env.MONGO_URI)
}
app.get('/',(req,res)=>{
      res.send('listening')
})
app.get('/:year/:semester',async(req,res)=>{
    const year = parseInt(req.params.year)
    const semester = parseInt(req.params.semester)
    console.log(year,semester)
    let data = await pdf.find({year,semester})
    console.log(data);
    res.send(data)

})
app.post('/api/adminchakreshtrue',async(req,res)=>{
console.log(req.body.input)
await pdf.create(req.body.input).then((result)=>{
    console.log(result)
    res.send(result)
}).catch((Err)=>{
console.log(Err)
})
   

})
app.listen('8080',()=>{
    mongo_cnct().then(()=>{
        console.log('connected to db')
    }).catch((err)=>{
        console.log(err)
    })
    console.log('listening')
})