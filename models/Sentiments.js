const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const SentimentSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    }
});

module.exports = Sentiment = mongoose.model('sentiment_agg', SentimentSchema);
