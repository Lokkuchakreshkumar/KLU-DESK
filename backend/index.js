import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose"
import pdf from "./models/pdf.js"
import cors from "cors"
import { GoogleGenAI } from "@google/genai"
import {v2 as cloudinary} from "cloudinary";
import pkg from "multer-storage-cloudinary"
import multer from "multer"
const {CloudinaryStorage} = pkg;

dotenv.config()

cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
})

const storage = new CloudinaryStorage({
  cloudinary,
  params:{
    folder:"resources",
    resource_type:"raw",
    allowed_formats:["pdf",".docx","doc"]
  }
})

const upload = multer({storage});

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
app.post('/upload',upload.single("pdf"),async(req,res)=>{
  try{
    res.status(200).json({
      url:req.file.path
    })
  }catch(err){
    console.log(JSON.stringify(err));
  }
})
app.post('/uniSearch',async(req,res)=>{
    console.log(req.body)
    let pdfs = await pdf.find({});
    console.log(pdfs);
    const ai = new GoogleGenAI({apiKey:process.env.GEMINI_NEW_KEY});
 let prompt = `
You are SynkAI inside the kled website.

Your job:
Given the user query, search ONLY inside the provided JSON list of PDFs and return matching results.

Hard Rules:
1. Only use items from the provided PDF list.
2. Output must be clean HTML.
3. Output must NOT contain any triple backticks or code blocks. Never use \`\`\` in the response.
4. Use the EXACT card design given below.
5. Do NOT change width or height in any element.
6. Each card must show: title, subject, year, semester, type, open-link, and a downloadable link.
7. To generate the downloadable link, extract the file ID from the "url" field and convert it into:
   https://drive.google.com/uc?export=download&id=FILE_ID
8. The output must ONLY be the final HTML, no explanations or surrounding text.
9. Use premium styled buttons (as given in the template). Do not replace them with plain links.
10. If zero matches:you can reply with empathy no just static response"
11.And also guide the user ,if resources were found tell him about them.
12.You should not just give cards and you have to give details about him.
13.See there might be complexity in kled ,because oops means java also (subjects name different),if you have any doubt ask user explicity.You need to think,this is just example,you need to think before replying to user.
14. Make sure everything has gaps ,should not look like congested at all.
Card HTML Template (use EXACTLY this structure and styling):
<div style="
  background:#111;
  border:1px solid #333;
  padding:12px;
  border-radius:12px;
  margin-bottom:12px;
  color:white;
  font-family:system-ui;
">
  <h2 style="font-size:1rem; font-weight:600; margin:0;">{{TITLE}}</h2>
  <p style="opacity:0.7; margin:6px 0;">
    Subject: {{SUBJECT}}
    Year: {{YEAR}}
    Semester: {{SEM}}
    Type: {{TYPE}}
  </p>

  <div style="display:flex; gap:10px; margin-top:10px;">

    <a href="{{OPEN_URL}}" target="_blank" style="
      background:#1a73e8;
      color:white;
      padding:8px 14px;
      border-radius:8px;
      text-decoration:none;
      font-size:0.85rem;
      font-weight:500;
      box-shadow:0 0 8px rgba(26,115,232,0.4);
      transition:0.2s;
      cursor:pointer;
    ">Open</a>

    <a href="{{DOWNLOAD_URL}}" style="
      background:#18c964;
      color:#000;
      padding:8px 14px;
      border-radius:8px;
      text-decoration:none;
      font-size:0.85rem;
      font-weight:600;
      box-shadow:0 0 8px rgba(24,201,100,0.4);
      transition:0.2s;
      cursor:pointer;
    ">Download</a>

  </div>
</div>

PDF Resources JSON:
${JSON.stringify(pdfs)}

User Query:
${req.body.input}
`


 try{
       async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt
  });
  return response.text
}

let data = await main();
res.status(200).json({reply:data});

 }catch(err){
    res.status(400).json({error:"some error occured"})
 }

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
    model: "gemini-2.5-flash-lite",
    contents: prompt,
  });

 return  response.text

}
let prompt = `Your "KLUE AI" an Highly advanced ai education helper living in a browser web app called KLED created Chakresh(portfolio:https://chakresh.vercel.app) and your work is to help students who asks doubts and they might ask any questions realted to education but
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

app.post(`/${process.env.SAFEROUTE}`,async(req,res)=>{
console.log(req.body.input)
console.log(req.body.input.password);
if(req.body.input.password !== process.env.password){
    return res.status(401).send('unauthorized')
}
else{
await pdf.create(req.body.input).then((result)=>{
    console.log(result)
    res.send(result)
}).catch((Err)=>{
console.log(Err)
})
}

})
app.post('/create',async(req,res)=>{
  console.log(req.body.input);
  try{
   let status =  await pdf.create(req.body.input)
   res.status(200).json({success:true,status:status})

  }
  catch(err){
    console.log(err)
  }
})
app.listen('8080',()=>{
    mongo_cnct().then(()=>{
        console.log('connected to db')
    }).catch((err)=>{
        console.log(err)
    })
    console.log('listening')
})