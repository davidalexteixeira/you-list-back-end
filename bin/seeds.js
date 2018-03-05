const mongoose = require('mongoose');
const Playlist = require('../models/playlist');

const dbName = 'you-list-db';
mongoose.connect(`mongodb://localhost/${dbName}`);

const playlist = [
  {
    playlistname: 'That master flex'
  },
  {
    playlistname: 'Funky shiz'
  },
  {
    playlistname: 'That kush'
  },
  {
    playlistname: 'Sleezy Saturday'
  }
];

Playlist.create(playlist, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${playlist.length} playlists`);
});
