import React, { useState, useEffect } from "react";

const TripList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/trips")
      .then(response => response.json())
      .then(json => setTrips(json));
  }, []);

  console.log(trips);

  return (
    <div>
      <h2>Trip List</h2>
    </div>
  );
};

export default TripList;
