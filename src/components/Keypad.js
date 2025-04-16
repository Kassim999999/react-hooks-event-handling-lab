// Code Keypad Component Here
import React from 'react'

const Keypad = () => {
     
     function handleChange(event) {
        event.preventDefault();
        console.log('Entering password...');
        
     }

  return (
    <div>
        <input type='password' placeholder='Enter password...'
        onChange={handleChange}
        />
    </div>
  )
}

export default Keypad
