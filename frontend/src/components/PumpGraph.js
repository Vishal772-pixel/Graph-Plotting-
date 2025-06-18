
import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

const PumpGraph = () => {
  const [time, setTime] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/pumps')
      .then((res) => {
        const data = res.data;

    
        const timestamps = data.map(item => item.timestamp);
        const pumpStatus = data.map(item => item.status);

        setTime(timestamps);
        setStatus(pumpStatus);
      })
      .catch((err) => {
        console.error("Error fetching pump data:", err);
      });
  }, []);

  return (
    <Plot
      data={[
        {
          x: time,
          y: status,
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'blue' },
        },
      ]}
      layout={{
        title: 'Pump Activity Timeline',
        xaxis: { title: 'Time' },
        yaxis: { title: 'Status (1=On, 0=Off)', dtick: 1 },
      }}
      style={{ width: "100%", height: "500px" }}
    />
  );
};

export default PumpGraph;
