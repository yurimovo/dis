const {Schema, model} = require('mongoose')

const schema = new Schema({
    organization: {type: String, required: true},
    facility: {type: String, required: true},
    address: {type: String, required: true},
    phoneNumbers: {type: String, required: true},
    contructNumber: {type: String, required: true},
    contructDate: {type: Date, required: true},
    price: {type: Number, required: true},
    priceDate: {type: Date, required: true},
    ownershipType: {type: String, required: true},
    facilityCategory: {type: String, required: true},
    securityType: {type: String, required: true},
    contructFileNumber: {type: Number, required: true},
    letteredFileNumber: {type: Number, required: true},
    spi: {type: String, required: true},
    facilityHardware: {type: String, required: true},
    pultNumbers: {type: String, required: true},
    mountingOrganization: {type: String, required: true},
    survingOrganization: {type: String, required: true},
    simNumber: {type: String, required: true, unique: true},
    serialNumber: {type: String, required: true},
    fccID: {type: String, required: true, unique: true},
    responsible: {type: String, required: true},
    assortment: {type: String, required: true},
    securityHours: {type: String, required: true}
})

module.exports = model('Facility', schema)