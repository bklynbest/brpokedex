import React from 'react';
import Rainbow from '../Hoc/Rainbow'

const About= (WrappedComponent) => {
 
  return (
    <div className= "container">
      <h4 className= "center">About</h4>
      <p>This version contains the source SCSS files. 
          By choosing this version you have more control over 
          which components to include. You will need a Sass 
          compiler if you choose this option.
      </p>
    </div>
  )
}

export default Rainbow(About);