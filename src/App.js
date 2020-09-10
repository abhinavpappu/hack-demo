import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  let [events, setEvents] = useState([]);

  useEffect(() => {
    // setEvents('bye');
    // events = 'bye';
    fetch('https://api.hackillinois.org/event/').then(res => res.json()).then(json => {
      setEvents(json.events)
    })
  }, [])

  return (
    <div className="App">
      {events.map(event => (
        <div>
          <h2>{event.name}</h2>
          <p>{event.description}</p>
          <div>{new Date(event.startTime * 1000).toDateString()} - {new Date(event.endTime * 1000).toDateString()}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
