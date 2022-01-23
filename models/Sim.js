const {Schema, model} = require('mongoose')

const schema = new Schema({
    fccId: {type: String, required: true, unique: true},
    simNumber: {type: String, required: true, unique: true},
    mountingDate: {type: Date, required: true},
    pultNumber: {type: String, required: true},
    mountingPlace: {type: String, required: true},
    mountingAddress: {type: String, required: true}
})

module.exports = model('Sim', schema)