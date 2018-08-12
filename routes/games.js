var express = require('express')
var router = express.Router()

// create a link to our drink model
var gamesController = require('../controllers/gamesController')

// index (http://my-app.com/games)
router.get( '/', gamesController.index );

// new (http://my-app.com/games/new)
router.get( '/new', gamesController.new );

// show (http://my-app.com/games/12345)
router.get( '/:id', gamesController.show );

// edit (http://my-app.com/games/12345/edit)
router.get( '/:id/edit', gamesController.edit );

// create (http://my-app.com/games)
router.post( '/', gamesController.create );

// update (http://my-app.com/games/12345)
router.post( '/:id', gamesController.update );

// delete (http://my-app.com/games/12345/delete)
router.post( '/:id/delete', gamesController.delete );

// makes our file public to the application
module.exports = router;
