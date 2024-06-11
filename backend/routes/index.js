const express = require('express');
const router = express.Router();

const shipmentDetailsController = require('../controller/shipmentDetailsConroller');

// testing
router.get('/test', (req, res) => res.json({msg: 'Working'}))

router.get('/shipment/:id', shipmentDetailsController.getById);

module.exports = router;