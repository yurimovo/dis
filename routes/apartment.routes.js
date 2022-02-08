const {Router} = require('express')
const config = require('config')
const Apartment = require('../models/Apartment')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/apartment-add', async (req, res) => {
    try {
        //const baseUrl = config.get('baseUrl')
        const { owner, address, phoneNumbers, contructNumber,
            contructDate, price, priceDate, apartmentCategory,
            securityType, contructFileNumber, letteredFileNumber, spi,
            apartmentHardware, pultNumbers, simNumber, serialNumber,
            fccId, responsible, assortment } = req.body.data

        const apartmentCandidate = await Apartment.findOne({ apartment })
        if (apartmentCandidate) {
            return res.status(400).json(
                {message: `Apartment already exist`})
        }

        const apart = new Apartment()
        await apart.save()
        res.json({message: "Apartment was added"})
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

// Чтение МХИГ из базы
router.get('/apartments', async (req, res) => {
    try {
        const apartments = await Apartment.find({})
        res.json(apartments)
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

// Выборка нужного МХИГ
router.get('/:id', async (req, res) => {
    try {
        const apartment = await Apartment.findById(req.params.id)
        res.json(apartment)
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

module.exports = router