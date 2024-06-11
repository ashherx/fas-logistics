const moongose = require('mongoose');

const shipmentDetails = moongose.Schema({
    shipmentId: {type: String, required: true},
    status: {type: String, required: true},
    estimatedDelivery: {type: String, required: true},
    origin: {type: String, required: true},
    destination: {type: String, required: true},
},
    {timestamps: true}
)

module.exports = moongose.model('ShipmentDetails', shipmentDetails, 'shipmentDetails');