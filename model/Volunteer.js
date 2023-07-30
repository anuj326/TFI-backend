const mongoose =  require('mongoose');

const VolunteerData =  new mongoose.Schema({
    fname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    language:{
        type:String,
        required:true,
    }, 
    availablity:{
        type:String,
        required:true,
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Volunteer', VolunteerData);