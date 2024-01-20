const WifiInfo = require('../model/wifiModel');

const createWifi = async (req,res) => {
    try {
        const { ssid, password } = req.body;
        const wifiInfo = new WifiInfo({ ssid, password });
        await wifiInfo.save();
        res.status(200).json({ message: 'SSID dan password WiFi berhasil disimpan.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Gagal menyimpan SSID dan password WiFi.' });
    }
}

const getWifi = async (req,res) => {
    try {
        const wifiInfo = await WifiInfo.findOne();
        if (wifiInfo) {
          res.status(200).json({ ssid: wifiInfo.ssid, password: wifiInfo.password });
        } else {
          res.status(404).json({ message: 'SSID dan password WiFi tidak ditemukan.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Gagal mendapatkan SSID dan password WiFi.' });
    }
}

module.exports = {createWifi, getWifi};