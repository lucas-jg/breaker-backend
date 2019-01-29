const mongoose = require("mongoose");

const { Schema } = mongoose;

const MapData = new Schema({
    blockID: Number,
    iIndex: Number
});

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
            default: "uknown"
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
    }
});

module.exports = mongoose.model("Map", Map);
