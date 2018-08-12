var Game = require( '../models/game' )

/* VIEWS */
// Index
exports.index = function( req, res, next ) {
  // create our locals parameter
  let locals = {
    title: 'Games List'
  };

  Game.find()
  .then( function ( games ) {
    // add the games to our locals
    locals.games = games;

    // render our view
    res.render( 'games/index', locals )
  })
  .catch( function ( err ) {
    next( err )
  });
};

// Show
exports.show = function ( req, res, next ) {
  // locals
  let locals = {
    title: 'Game'
  };

  Game.findById({
    _id: req.params.id
  })
  .then( function ( game ) {
    // add the games to our locals
    locals.game = game;

    // render our view
    res.render( 'games/show', locals )
  })
  .catch( function ( err ) {
    next( err )
  })
};

// New
exports.new = function ( req, res ) {
  // locals
  let locals = {
    title: 'New Game'
  };

  res.render( 'games/new', locals )
};

// Edit
exports.edit = function ( req, res, next ) {
  // locals
  let locals = {
    title: 'Edit Game'
  };

  Game.findById({
    _id: req.params.id
  })
  .then( function ( game ) {
    // add the games to our locals
    locals.game = game;

    // render our view
    res.render( 'games/edit', locals )
  })
  .catch( function ( err ) {
    next( err )
  })
};

/* ACTIONS */
// Create
exports.create = function ( req, res, next ) {
  Game.create({
    name: req.body.name,
    description: req.body.description,
    noPlayers: req.body.noPlayers,
    ersbRating: req.body.ersbRating,
    features: req.body.features,
    lengthOfGamePlay: req.body.lengthOfGamePlay
  })
  .then( function () {
    res.redirect( '/games' )
  })
  .catch( function ( err ) {
    next( err )
  })
};

// Update
exports.update = function ( req, res, next ) {
  Game.findById( req.params.id )
  .then(function ( game ) {
    game.name = req.body.name;
    game.description = req.body.description;
    game.noPlayers = req.body.noPlayers;
    game.ersbRating= req.body.ersbRating;
    game.features= req.body.features;
    game.lengthOfGamePlay= req.body.lengthOfGamePlay;

    game.save()
    .then(  function () {
      res.redirect( '/games' )
    })
    .catch( function ( err ) {
      next( err )
    })
  })
  .catch(function ( err ) {
    next( err )
  })
};

// Delete
exports.delete = function ( req, res ) {
  Game.remove({
    _id: req.body.id
  })
  .then( function () {
    res.redirect( '/games' )
  })
  .catch( function ( err ) {
    next( err )
  })
};
