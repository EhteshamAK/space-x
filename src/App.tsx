import React, { useState,useCallback } from 'react';
import LaunchList from './components/LaunchList';
import LaunchProfile from './components/LaunchProfile';
import './App.css';

const App = () => {
  const [id, setId] = useState(13);
  console.log("thisis in id ",id)
  const handleIdChange = useCallback(newId => {
    setId(newId);
  }, []);

  return (
    <div className="App">
      <LaunchList handleIdChange={handleIdChange} />
      <LaunchProfile id={id} />
    </div>
  );
};

export default App;

