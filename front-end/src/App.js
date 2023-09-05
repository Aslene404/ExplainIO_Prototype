import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/hello')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/upload'); 
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Hello from React!</h1>
      <p>{message}</p>
      <button onClick={fetchData}>Fetch Data</button>
      {data ? (
        <div>
          <h2>Fetched Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Press the button to fetch data.</p>
      )}
    </div>
    
  );
}

export default App;
