import React, { useState, useEffect } from 'react';

const App = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch('https://tripapi.cphbusinessapps.dk/api/trips');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTrips(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div>
      <h1>Trips List</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {trips.map((trip) => (
            <li key={trip.id}>
              <h2>{trip.name}</h2>
              <p>
                <strong>Start:</strong> {new Date(trip.starttime).toLocaleString()}
                <br />
                <strong>End:</strong> {new Date(trip.endtime).toLocaleString()}
                <br />
                <strong>Location:</strong> {trip.latitude}, {trip.longitude}
                <br />
                <strong>Price:</strong> ${trip.price.toFixed(2)}
                <br />
                <strong>Category:</strong> {trip.category}
              </p>
              <h3>Guide Info:</h3>
              <p>
                <strong>Name:</strong> {trip.guide.firstname} {trip.guide.lastname}
                <br />
                <strong>Email:</strong> {trip.guide.email}
                <br />
                <strong>Phone:</strong> {trip.guide.phone}
                <br />
                <strong>Experience:</strong> {trip.guide.yearsOfExperience} years
                <br />
                <strong>Other Trips:</strong> {trip.guide.trips.join(', ')}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
