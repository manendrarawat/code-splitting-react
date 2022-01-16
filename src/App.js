import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom';
import Home from './components/Home';
//import Profile from './components/Profile';
//import Dashboard from './components/Dashboard.js';
import React from 'react';

const Profile = React.lazy(() => import('./components/Profile'));
const Dashboard = React.lazy(() => import('./components/Dashboard'));

function App() {
  return (

    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard11</Link>
        </li>
      </ul>

      <hr />

      <Switch>
        <React.Suspense fallback={'Loading.....'}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        </React.Suspense>
      </Switch>
    </div>
  </Router>
    
  );
}

export default App;
