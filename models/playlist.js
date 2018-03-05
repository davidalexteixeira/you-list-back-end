'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const playlistSchema = new Schema({
  playlistname: String,
  owner: {
    type: ObjectId,
    ref: 'User'
  },
  video: [{
    id: String,
    name: String
  }],
  subscribers: {
    type: ObjectId,
    ref: 'User'
  },
  public: Boolean
}
);

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;
