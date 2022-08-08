const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    rollNumber:{
        type:String,
        require:[true,'Please enter your roll number'],
    },
    avatar:{
        public_id:{
            type:String,
            require:false,
        },
        url: {
            type:String,
            require:false,
        }
    },
    batch:{
        type:String,
        require:[true,'Please enter your batch'],
    },
    branch:{
        type:String,
        enum:['CSE','ME','ECE','IT','EE'],
        require:[true,'Please enter your branch'],
    },
    semester:{
        type:String,
        enum:['1st','2nd','3rd','4th','5th','6th','7th','8th'],
        require:[true,'Please enter your semester'],
    },
    dob:{
        type:Date,
        require:[true,'Please enter your date of birth'],
    },
    category:{
        type:String,
        enum:['GEN','OBC-A','OBC-B','SC','ST'],
        require:[true,'Please enter your category'],
    },
    gender:{
        type:String,
        enum:['MALE','FEMALE'],
        require:[true,'Please enter your gender'],
    },
    bloodGroup:{
        type:String,
        enum:['A+','A-','B+','B-','AB+','AB-','O+','O-'],
        require:[true,'Please enter your blood group'],
    },
    aadharNumber:{
        type:String,
        require:[true,'Please enter your Aadhar Number'],
    }
});