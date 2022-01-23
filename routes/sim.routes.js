const {Router} = require('express')
const config = require('config')
const Sim = require('../models/Sim')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/sim-add', async (req, res) => {
    try {
        //const baseUrl = config.get('baseUrl')
        const {
            fccId,
            simNumber,
            mountingDate,
            pultNumber,
            mountingPlace,
            mountingAddress
        } = req.body

        const simCandidate = await Sim.findOne({ fccId })
        if (simCandidate) {
            return res.status(400).json(
                {message: `Sim-card with current fccId already exist`})
        }

        const sim = new Sim(
            {fccId, simNumber, mountingDate, pultNumber, mountingPlace, mountingAddress})
        await sim.save()
        res.json({message: "Sim was added"})
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

// Чтение симок из базы
router.get('/sim-cards', async (req, res) => {
    try {
        const simCards = await Sim.find({ fccId: null }) //???
        res.json(simCards)
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

// Выборка нужно СИМ
router.get('/sim-cards/:id', async (req, res) => {
    try {
        const simCard = await Sim.findById(req.params.id) //???
        res.json(simCard)
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

module.exports = router