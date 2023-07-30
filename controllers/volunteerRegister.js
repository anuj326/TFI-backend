const Volunteer = require('../model/Volunteer');

module.exports.volunteerRegister = async function(req, res){
    const {fname , email , contact , location ,language , availablity} = req.body;

    if(!fname || !email || !contact || !location || !language || !availablity){
        console.log('All fields are Mandatory');
        return res.status(400).json({error:'All fields are Mandatory'})
    }

    const volunteerExist = await Volunteer.findOne({email:email})
    if(volunteerExist){
        return res.status(422).json({error:'Volunteer already registered'})
    }
    const volunteerData = new Volunteer({
        fname , email , contact , location ,language , availablity
    })
    volunteerData.save();
    res.status(200).json("Volunteer has been registered");
}