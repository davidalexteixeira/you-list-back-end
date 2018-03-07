'use strict';

const express = require('express');
const router = express.Router();

const Playlist = require('../models/playlist');

// -- get my Playlists

router.get('/playlists', (req, res, next) => {
  Playlist.find({owner: req.session.currentUser._id})
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

// router.delete('/playlist', (req, res, next) => {
//   Playlist.remove({_id:  })
//   .then((data) => {
//     res.json(data);
//   })
//   .catch(next);
// })

module.exports = router;
