const Sensor = require('../model/sensorModel');

const createSensor = async (req, res) => {
    try {
        const { suhu, ph, turbidity, tds } = req.body;
        const dataSensor = {
            suhu,
            ph,
            turbidity,
            tds,
            waktu: Date.now(),
        };
        await Sensor.create(dataSensor);

        res.status(201).json({
            success: true,
            statusCode: res.statusCode,
            message: "Data sensor berhasil dibuat",
            data: dataSensor,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            statusCode: res.statusCode,
            error: error.message,
        });
    }
};

const getSensor = async(req,res) => {
    try {
        const dataSensor = await Sensor.find();
        if (!dataSensor) {
            return res.status(404).json({ message: 'Data tidak ditemukan' });
          };
        res.status(200).json({
            success: true,
            statusCode: res.statusCode,
            data: dataSensor,
        })
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { createSensor, getSensor };