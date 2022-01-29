const {Router} = require('express')
const config = require('config')
const Facility = require('../models/Facility')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/facility-add', async (req, res) => {
    try {
        //const baseUrl = config.get('baseUrl')
        const {
            organization,
            facility,
            address,
            phoneNumbers
        } = req.body

        const facilityCandidate = await Facility.findOne({ facility })
        if (facilityCandidate) {
            return res.status(400).json(
                {message: `Facility already exist`})
        }

        const fac = new Facility(
            {organization, facility, address, phoneNumbers})
        await fac.save()
        res.json({message: "Sim was added"})
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

// Чтение объектов из базы
router.get('/facilities', async (req, res) => {
    try {
        const facilities = await Facility.find({})
        res.json(facilities)
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

// Выборка нужного объекта
router.get('/:id', async (req, res) => {
    try {
        const facility = await Facility.findById(req.params.id)
        res.json(facility)
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

module.exports = router