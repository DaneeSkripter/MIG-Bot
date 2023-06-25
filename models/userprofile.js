const mongoose = require('mongoose');

const profile = new mongoose.Schema({
    discordid: { type: String},
    minecraftusername: { type: String},
    wotusername: { type: String},
    lolusername: { type: String},
    fortniteusername: { type: String},
    wowusername: { type: String}
})

const model = mongoose.model('profiles', profile)

module.exports = model;