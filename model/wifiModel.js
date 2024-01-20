const mongoose = require('mongoose');

const wifiInfoSchema = new mongoose.Schema({
    ssid: String,
    password: String
  });
  
const WifiInfo = mongoose.model('WifiInfo', wifiInfoSchema);

module.exports = WifiInfo;