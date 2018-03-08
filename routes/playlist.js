'use strict';

const express = require('express');
const router = express.Router();
const Playlist = require('../models/playlist');

// -- Get Playlists

router.get('/', (req, res, next) => {
  Playlist.find({})
    .populate('owner')
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

// -- Get single playlist

router.get('/single-playlist/:id', (req, res, next) => {
  const playlistId = req.params.id;
  Playlist.findById(playlistId)
    .populate('owner')
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

// -- Create a playlist
router.post('/create-playlist', (req, res, next) => {
  const playlistname = req.body.playlistname;

  if (!playlistname) {
    return res.status(422).json({error: 'validation'});
  }

  const newPlaylist = Playlist({
    playlistname,
    owner: req.session.currentUser._id
  });

  return newPlaylist.save()
    .then(() => {
      res.json(newPlaylist);
    });
});

router.post('/single-playlist/:playlistId', (req, res, next) => {
  const videoId = req.body.videoId;
  const videoName = req.body.videoName;
  const playlistId = req.params.playlistId;

  Playlist.findByIdAndUpdate(playlistId, {$push: { video: {id: videoId, name: videoName} }})
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

router.put('/single-playlist/:playlistId', (req, res, next) => {
  const playlistId = req.params.playlistId;
  const videoId = req.body.videoId;
  console.log(req.body.videoId);

  Playlist.findByIdAndUpdate(playlistId, {$pull: {video: {id: videoId}}})
    .then((data) => {
      res.json(data);
    })
    .catch(next);
});

module.exports = router;
