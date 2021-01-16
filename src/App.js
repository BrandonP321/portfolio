import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import './App.css';
import Footer from './components/Footer'
import VerticalNav from './components/VerticalNav'

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <VerticalNav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
