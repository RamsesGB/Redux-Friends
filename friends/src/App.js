import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FriendsList from './Components/friendsList';
import Login from './Components/login';



function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/friends'>My Homies</Link></li>
        </ul>
        <Route path='/login' component={Login} />
        <Route path='/friends' component={FriendsList} />
      </div>
    </Router>
  );
}

export default App;
