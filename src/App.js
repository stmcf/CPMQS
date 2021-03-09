import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import NavBar from './components/NavBar.js';
import Contact from './components/Contact.js';
import Services from './components/Services.js';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Router>
        <>
          <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route path="/about" component={About} /> */}
              <Route path="/services" component={Services} />
              <Route path="/contact" component={Contact} />
            </Switch>
          <Footer/>
        </>
      </Router>
        
    </div>
  );
}

export default App;
