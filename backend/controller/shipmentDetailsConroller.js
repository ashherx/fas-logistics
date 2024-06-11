const ShipmentDetails = require("../models/shipmentDetails");

const shipmentDetailsController = {
  async getById(req, res) {
    try {
      const { id } = req.params;
      details = await ShipmentDetails.findOne({ shipmentId: id });
      res.status(200).json({ details });
    } catch (error) {
      res.status(500).json("SERVER ERROR");
    }
  },
};

module.exports = shipmentDetailsController;
