import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';


const Navbar= (props) => {
  //setTimeout(() => {
    //props.history.push('/about')
  //}, 2000)
  return(
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo left"><Link to="/">PokeTimes</Link></a>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);