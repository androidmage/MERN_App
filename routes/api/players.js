const express = require('express');
const router = express.Router();

// Item Model
const Player = require('../../models/Player');

// @route   GET api/players/names
// @desc    Get all player names
// @access  Public
router.get('/names', (req, res) => {
    Player.find()
        .select('name')
        .distinct('name')
        .then(players => res.json(players))
});

// @route   GET api/players/years
// @desc    Get all years for player
// @access  Public
router.get('/years', (req, res) => {
    Player.find( {name: req.query.name} )
        .select('year')
        .distinct('year')
        .then(years => res.json(years))
});

// @route   GET api/players
// @desc    Get player by name and year
// @access  Public
router.get('/', (req, res) => {
    Player.find( {name: req.query.name, year: req.query.year} )
        .then(player => res.json(player))
});

module.exports = router;