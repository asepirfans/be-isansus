const mongoose = require('mongoose');

const dataSensor = new mongoose.Schema({
    suhu: {
        type: Number,
    },
    ph: {
        type: Number,
    },
    turbidity: {
        type: Number,
    },
    tds: {
        type: Number,
    },
     waktu: {
    type: Date,
    default: Date.now,
  },
});

const Sensor = mongoose.model('Sensor', dataSensor);

module.exports = Sensor;