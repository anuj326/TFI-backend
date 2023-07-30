const Users = require('../model/User');

module.exports.adminRegister = async function(req, res){
    const {email , password} = req.body;

    if(!email || !password){
        console.log('All fields are Mandatory');
        return res.status(400).json({error:'All fields are Mandatory'})
    }

    const volunteerExist = await Users.findOne({email:email})
    if(volunteerExist){
        return res.status(422).json({error:'Email already registered'})
    }
    const volunteerData = new Users({
        email , password
    })
    volunteerData.save();
    res.status(200).json("Email has been registered as Admin");
}