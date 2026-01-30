import mongoose from "mongoose"
const pdfSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    subject:{
        type:String,
        required: true
    },
    year:{
        type:Number,
       required: true
       
    },
    semester:{
        type:Number,
        required: true
    },
    url:{
        type:String,
        required:true
    },
    type:{
        type:String,
        default:'before Exam'
    },
    verified: {
  type: Boolean,
  default: false
}


})
const pdf = new mongoose.model('pdf',pdfSchema)
export default pdf