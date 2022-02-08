const {Schema, model} = require('mongoose')

const schema = new Schema({
    owner: {type: String, required: true},
    address: {type: String, required: true},
    phoneNumbers: {type: String, required: true},
    contructNumber: {type: String, required: true},
    contructDate: {type: Date, required: true},
    price: {type: Number, required: true},
    priceDate: {type: Date, required: true},
    apartmentCategory: {type: String, required: true},
    securityType: {type: String, required: true},
    contructFileNumber: {type: Number, required: true},
    letteredFileNumber: {type: Number, required: true},
    spi: {type: String, required: true},
    apartmentHardware: {type: String, required: true},
    pultNumbers: {type: String, required: true},
    simNumber: {type: String, required: true, unique: true},
    serialNumber: {type: String, required: true},
    fccID: {type: String, required: true, unique: true},
    responsible: {type: String, required: true},
    assortment: {type: String, required: true}
})

module.exports = model('Apartment', schema)