var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Game Zila',
    cards: [
      {
        cardTitle: 'Available Games',
        cardBody: 'Show all the games available online',
        cardLink: {
          linkLabel: 'All Games',
          linkHREF: '/games'
        }
      },
      {
        cardTitle: 'Add Game',
        cardBody: 'Add a new game to the store',
        cardLink: {
          linkLabel: 'Add New Game',
          linkHREF: '/games/new'
        }
      }
    ]
  });
});

module.exports = router;
