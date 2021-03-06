const mongoose = require('mongoose')

const { Schema } = mongoose

const MapData = new Schema({
    itemID: Number,
    blockID: Number,
    iIndex: Number
})

const Map = new Schema({
    title: String,
    count: {
        type: Number,
        default: 0
    },
    owner: String,
    bestScore: {
        user: {
            type: String,
            default: 'uknown'
        },
        score: {
            type: Number,
            default: 0
        }
    },
    mapData: [MapData],
    createDate: {
        type: Date,
        default: new Date()
    },
    password: String
})

module.exports = mongoose.model('Map', Map)
