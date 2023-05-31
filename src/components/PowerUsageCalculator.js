import React, { useState } from 'react';

const PowerUsageCalculator = () => {
  const [numDevices, setNumDevices] = useState(0);
  const [devices, setDevices] = useState([]);
  const [result, setResult] = useState(null);

  const handleNumDevicesChange = (event) => {
    const count = parseInt(event.target.value);
    setNumDevices(count);
    setDevices(Array(count).fill({ watts: 0, hours: 0 }));
  };

  const handleDeviceInputChange = (index, field, value) => {
    const updatedDevices = devices.map((device, i) => {
      if (i === index) {
        return { ...device, [field]: value };
      }
      return device;
    });
    setDevices(updatedDevices);
  };

  const handleCompute = () => {
    let totalPower = 0;
    let totalHours = 0;

    devices.forEach((device) => {
      const powerConsumption = device.watts / 1000;
      const hours = device.hours.includes('/')
        ? eval(device.hours) // Evaluate fraction expression
        : parseFloat(device.hours);

      totalPower += powerConsumption * hours;
      totalHours += hours;
    });

    setResult(
      `You have used ${totalPower.toFixed(2)} Units of power over ${totalHours.toFixed(
        2
      )} hours.`
    );
  };

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#f7f7f7',
        borderRadius: '8px',
        width: '400px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Power Usage Calculator</h1>
      <label style={{ marginBottom: '10px' }}>
        Number of Devices:
        <input type="number" value={numDevices} onChange={handleNumDevicesChange} />
      </label>
      {devices.map((device, index) => (
        <div
          key={index}
          style={{
            marginBottom: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <label style={{ marginBottom: '5px' }}>
            Watts:
            <input
              type="number"
              value={device.watts}
              onChange={(e) =>
                handleDeviceInputChange(index, 'watts', parseFloat(e.target.value))
              }
            />
          </label>
          <label style={{ marginBottom: '5px' }}>
            Hrs:
            <input
              type="text"
              value={device.hours}
              onChange={(e) => handleDeviceInputChange(index, 'hours', e.target.value)}
            />
          </label>
        </div>
      ))}
      <button
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '8px 16px',
          cursor: 'pointer',
          marginTop: '20px',
          marginBottom: '20px',
        }}
        onClick={handleCompute}
      >
        Compute
      </button>
      {result && (
        <p
          style={{
            fontSize: '16px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          {result}
        </p>
      )}
      <footer style={{ fontSize: '12px', color: '#999', textAlign: 'center' }}>
        Designed by Tosh
      </footer>
    </div>
  );
};

export default PowerUsageCalculator;
