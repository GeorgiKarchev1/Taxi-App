const mongoose = require('mongoose');

const fareSchema = new mongoose.Schema({
    distance: { type: Number, required: true },
    fare: { type: Number, required: true }
});

const Fare = mongoose.model('Fare', fareSchema);

module.exports = Fare;
