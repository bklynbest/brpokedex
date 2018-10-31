import React, {Component} from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Post from './Components/Post'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />  
            <Route path="/about" component={About} />  
            <Route path="/contact" component={Contact} />
            <Route path= "/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;