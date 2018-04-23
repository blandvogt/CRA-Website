//Importing React
import React, { Component } from 'react';

//Importing Styles
import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery.min.js';

//Importing Route Components
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//Importing Page Routes
import Home from './pages/home/home'
import About from './pages/about/about'
import Experience from './pages/experience/experience'

class App extends Component {
  render() {
    return (
      <div id='content'>
        <Router>
          <div>
            <nav className="App navbar navbar-expand-lg navbar-dark bg-dark">
              <Link to="/" className="navbar-brand">
                <img src={require('./pages/images/logo.png')}
                  className="App-logo" alt="logo"/>
              </Link>

              <button className="navbar-toggler" type="button"
                data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="ml-auto collapse navbar-collapse"
                id="navbarSupportedContent">

                <ul className="ml-auto navbar-nav">
                  <li className="ml-auto nav-item">
                    <Link to='/about' className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="ml-auto nav-item">
                    <Link to='/experience' className="nav-link">
                      Experience
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <div id="body">
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/experience" component={Experience}/>
            </div>
          </div>
        </Router>


        <div className='bg-dark' id='footer'>
          BrianLandvogt@Gmail.com
        </div>
      </div>
    );
  }
}

export default App;
