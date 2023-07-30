const Volunteer = require('../model/Volunteer');

module.exports.volunteerData = async function(req, res){
    const data = await Volunteer.find();
    if(!data){
        res.status(204).json('No data Available')
    }else{
        res.status(200).json(data);
    }
}