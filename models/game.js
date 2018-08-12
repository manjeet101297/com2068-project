var mongoose = require( 'mongoose' );

// all model classes will inherit from
// the mongoose.Schema class
var gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Please enter a game name.'
  },
  description: {
    type: String,
    required: 'Please enter a game description.'
  },
  noPlayers: {
    type: Number,
    required: 'Please enter number of players.'
  },
  features: {
    type: String,
    required: 'Please enter atleast one feature of the game.'
  },
  lengthOfGamePlay: {
    type: Number,
    required: "Please enter length Of GamePlay."
  }
});

// make this class public
module.exports = mongoose.model( 'Game', gameSchema );
