const mongoose = require('mongoose')

const photoSchema = new mongoose.Schema({
    albumId: {
        type: Number,
        required: true,
        default: 1,
    },
    id: {
        type: Number,
    },
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    thumbnailUrl: {
        type: String,
        required: true,
        default: 'placeholder',
    }
}, {versionKey: false});



let counter = 0;

photoSchema.pre('save', function(next) {
    if (!this.id) {
        this.id = ++counter;
    }
    next();
});

module.exports = mongoose.model('Subscriber', photoSchema)