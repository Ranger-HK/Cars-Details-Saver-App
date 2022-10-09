const mongoose=require('mongoose');

const vehicle=new mongoose.Schema({
    vehicleBrand:{
        type:String,
        required:true
    },
    vehicleRegistrationNumber:{
        type:String,
        required:true
    },
    otherDetails :{
        type:String,
        required:true
    }
});
module.exports=mongoose.model('Vehicle',vehicle);
