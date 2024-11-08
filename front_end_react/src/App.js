import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Routes from './routes';
import Dashboard from './Dashboard';
import UserManagement from './UserManagement';
import ProjectManagement from './ProjectManagement';
import InstrumentManagement from './InstrumentManagement';

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
        <div>
            <h1>Data from Django API</h1>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <div>No data available</div>}
        </div>

        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/inst_administration" component={UserManagement} />
            <Route path="/inst_projects" component={ProjectManagement} />
            <Route path="/inst_instrument_index" component={InstrumentManagement} />
            {/* 其他路由 */} */
          </Switch>
        </Router>
      </>
    );
}

export default App;
