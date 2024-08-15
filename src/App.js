import React, { useState, useEffect } from 'react';
import Astroverse from './components/Astroverse/Astroverse';
import Login from './components/interfaces/Login';
import Signup from './components/interfaces/Signup';
import Background from './Background';
import './App.css';


console.log(useState);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  console.log(isLoading);

  return (
    <div className='App'>
      <Background className='app-background'>
        {isLoading ? (
          <div className='loading'><p>Loading...</p></div>
        ) : (
          <>
            <Astroverse />
            {!isAuthenticated && <Login setIsAuthenticated={setIsAuthenticated} />}
          </>
        )}
      </Background>
    </div>
  );
}

export default App;
