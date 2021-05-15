const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const HourSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    }
});

module.exports = Hour = mongoose.model('hour_agg', HourSchema);
