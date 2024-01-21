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

const getSensors = async(req,res) => {
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

const getSensor = async (req, res) => {
    try {
      const dataSensor = await Sensor.find()
        .sort({waktu:-1}).limit(1); // Hanya mengambil satu dokumen (data terbaru)
  
      if (!dataSensor || dataSensor.length === 0) {
        return res.status(404).json({ message: 'Data tidak ditemukan' });
      }
  
      res.status(200).json({
        success: true,
        statusCode: res.statusCode,
        data: dataSensor,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

module.exports = { createSensor, getSensor, getSensors };