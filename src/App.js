import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './header'
import RandomPlanet from './random-planet'
import PersonPage from './person-page'
import StarshipsPage from './starships-page'



function App() {
  return (
    <Router>
      <div className="app container">
        <Header />
        <RandomPlanet />
        <Route path="/" render={() => <h2>Wellcome!</h2>} exact/>
        <Route path="/persons" component={PersonPage} />
        <Route path="/starships" component={StarshipsPage} />
        
      </div>
    </Router>
  );
}

export default App;
