import React, {Component} from 'react';

class Contact extends Component  {
  state = {
    name : "Jonathan Momperousse",
    email : "",
  };
  
  render() {
    const name = this.state.name
    return(
      <div className="container">
        <h4 className="center">Contact Me</h4>
        <p>  {name}
        </p>
      </div>
    );
  }
}

 // setTimeout(() => {
   // props.history.push('/about')
  //}, 2000);


export default Contact;