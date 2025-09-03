import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose"
import pdf from "./models/pdf.js"
import cors from "cors"
import { GoogleGenAI } from "@google/genai"




dotenv.config()

let memoryarr= [];
if(memoryarr.length >=100){
    memoryarr=[];
}
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
app.post('/fetch',async(req,res)=>{
    console.log(req.body.input)
  let result =  await pdf.find({subject:req.body.input})
  console.log(result)
    res.send(result);
})
app.post('/chat/:id',async(req,res)=>{
    let {id} = req.params
 console.log(req.body)
 memoryarr.push({sender:'user',msg:req.body})
   let data =  await pdf.findById(id);
  
const ai = new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY
});

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

 return  response.text
 
}
let prompt = `Your "KLUE AI" an Highly advanced ai education helper living in a browser web app called KLU DESK created Chakresh(portfolio:https://chakresh.vercel.app) and your work is to help students who asks doubts and they might ask any questions realted to education but
here is your context why they came for you primarily
subject:${data.subject}
title:${data.title}
btech academic year:${data.year};
semester in their respective year:${data.semester}
memory:${memoryarr.map(m=>m.sender==='user'?`User:${m.msg.query}`:`AI:${m.msg}`)}
query:${req.body.query}
you don't have access to any pdf's or syllabus,you just have to answer conceptual questions
YOU DON'T HAVE A PROPER MEMORY YOU MAY SOME TIME CHAT WITH 100'S OF USERS AS WE DON'T HAVE AUTH SO READ MEMORY ARR CAREFULLY,(MEMORY ARR HAVE USERS FROM ALL OVER THE NET BUT SINGLE USER SHOULD BE SATISFIED,YOU MIGHT NEED TO CHAT WITH MULTIPLE PEOPLE ON DIFFERENT SUBJECTS SO WE PROVIDED THE TITLE AND SUBJECTS,YOU CAN EVEN PROVIDE CODE,
YOU HAVE TO ORGANIZE YOUR ANSWER VERY CLEARLY IN THE NEXT LINES TO MAKE THE ANSWER LOOK GOOD
you have to answer the query.support them and make the convo highly communicative ,
YOU HAVE TO FORMAT TEXT REALLY GOOD EASILY UNDERSTANDABLE FOR PEOPLE ,USE NEXT LINES FOR CLEAR UNDERSTANDING OF STUDENTS
USE MARKDOWN LANGUAGE TO ORGANIZE THE ANSWER IN THE CLEAR FORMAT USE EMOJIS TO CONVEY YOUR EMOTIONS TO STUDENTS
🧠 Your response must be crystal clear for students. Break down complex topics into digestible sections with headings and emojis.
DO NOT MENTION ABOUT YOUR FORMATTING TO THE USERS,YOU DON'T KNOW SUBJECTS FULL FORM SO BE CAREFULL AND TRY TO ASK USER THEIR QUERY AND THEN GO AHEAD ,IF NOT ASK EXPLICITLY(WITHOUT EXPOSING YOUR DUMB)
Format like this:
1. ### 🔍 What is [concept]?
   A short explanation in simple terms.

2. ### 📌 Why it matters
   Explain the importance or real-world application.

3. ### 🛠️ How it works
   Use bullet points or step-by-step logic.

4. ### 🧪 Code Example (if relevant)
   Provide clean, well-commented code in a single language (Python/Java/JS).

5. ### 📝 Summary
   Wrap it up with key points or takeaways.

Keep paragraphs short (2–4 lines).  
Use markdown syntax (**bold**) and emojis to improve clarity.  
Do not use long, dense paragraphs. Make it visually scannable and friendly to read.

Avoid vague responses — stay on-topic and support students with examples if needed.
each section should have breathing space there should space after the sections

`
let gemresponse = await main(prompt);


memoryarr.push({sender:'ai',msg:gemresponse})
 console.log(memoryarr)
res.send(gemresponse)
})
app.get('/:year/:semester',async(req,res)=>{
    const year = parseInt(req.params.year)
    const semester = parseInt(req.params.semester)
    console.log(year,semester)
    let data = await pdf.find({year,semester})
    
res.send(data)

  
})

app.post(process.env.SAFEROUTE,async(req,res)=>{
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