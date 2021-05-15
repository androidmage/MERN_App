const express = require('express');
const router = express.Router();

// Model
const Hour = require('../../models/Hours');
const Sentiment = require('../../models/Sentiments');

// @route   GET api/reddit/hours
// @desc    Get all hour aggregated data
// @access  Public
router.get('/hours', (req, res) => {
    Hour.find()
        .then(agg => res.json(agg))
});

// @route   GET api/reddit/sentiments
// @desc    Get all sentiment aggregated data
// @access  Public
router.get('/sentiments', (req, res) => {
    Sentiment.find()
        .then(agg => res.json(agg))
});

module.exports = router;
