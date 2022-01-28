const {Schema, model} = require('mongoose')

const schema = new Schema({
    organization: {type: String, required: true},
    facility: {type: String, required: true},
    address: {type: Date, required: true},
    phoneNumbers: {type: String, required: true}
})

module.exports = model('Facility', schema)