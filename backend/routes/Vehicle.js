const express = require('express');
const router = express.Router();

const Vehicle = require('../model/vehicle.model');

router.get('/', async (req, res) => {
    try {
        const response = await Vehicle.find();
        res.json(response)
    } catch (e) {
        res.send('error :' + e)
    }
})
router.post('/', async (req, res) => {
    const vehicles = new Vehicle({
        vehicleRegistrationNumber: req.body.vehicleRegistrationNumber,
        otherDetails: req.body.otherDetails,
        vehicleBrand: req.body.vehicleBrand
    })
    try {
        const response = await vehicles.save();
        res.json(response)
    } catch (e) {
        res.send('error :' + e)
    }
})
router.put('/', async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        for (const c of vehicles) {
            if (req.body.vehicleRegistrationNumber === c.vehicleRegistrationNumber) {
                const vehicle = await Vehicle.findById(c._id)
                vehicle.vehicleRegistrationNumber = req.body.vehicleRegistrationNumber;
                vehicle.otherDetails = req.body.otherDetails;
                vehicle.vehicleBrand = req.body.vehicleBrand;
                const response = await vehicle.save();
                res.send(response)
            }
        }

    } catch (e) {
        res.send('error :' + e)
    }
})
router.delete('/', async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        for (const v of vehicles) {
            if (req.body.vehicleRegistrationNumber === v.vehicleRegistrationNumber) {
                const dlt = await vehicles.findById(v._id);

                const response = await dlt.remove();
                res.send(response)
            }
        }
    } catch (e) {
        res.send('error :' + e)
    }
})

module.exports = router
