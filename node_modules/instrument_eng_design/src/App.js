import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/styles';
import theme from './styles/theme';
import AppRoutes from './routes';


/* const App = () => (
  <ThemeProvider theme={theme}>
  <Routes />
  </ThemeProvider>
); */

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/api/data/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    return (
      <>
               
        <ThemeProvider theme={theme}>
          <div>
              <h1>Data from Django API</h1>
              {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <div>No data available</div>}
          </div>
        </ThemeProvider> 

        <ThemeProvider theme={theme}>
          <Router>
            <AppRoutes />
          </Router>
        </ThemeProvider>
        
      </>
    );
}

export default App;
