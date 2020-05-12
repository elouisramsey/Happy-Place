import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home';
import Room from './components/Room';
import Rooms from './components/Rooms';
import Error from './components/Error';
import Navbar from './components/pages/Navbar';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';
import Bookings from './components/pages/Bookings';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/rooms' component={Rooms} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/bookings' component={Bookings} />
      <Route exact path='/rooms/:slug' component={Room} />
      <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
