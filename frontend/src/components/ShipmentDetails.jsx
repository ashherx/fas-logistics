import React from 'react';

function ShipmentDetails({ details }) {
  if (!details || details == undefined || details?.details == undefined) {
    return <p>No shipment details to display.</p>;
  }

  return (
    <section id="shipment-details.details">
      <h2 className="text-xl mb-4">Shipment Details.details</h2>
      <div className="p-4 border border-gray-300 bg-gray-50">
        <p><strong>Shipment ID:</strong> {details.details.shipmentId}</p>
        <p><strong>Status:</strong> {details.details.status}</p>
        <p><strong>Estimated Delivery:</strong> {details.details.estimatedDelivery}</p>
        <p><strong>Origin:</strong> {details.details.origin}</p>
        <p><strong>Destination:</strong> {details.details.destination}</p>
      </div>
    </section>
  );
}

export default ShipmentDetails;