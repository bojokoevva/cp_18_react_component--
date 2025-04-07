import React from 'react';

function Greeting({ name }) {
  return (
    <div>
      <h2>Hello from the Greeting Component!</h2>
      <p>{name}, this is your first custom component in React.</p>
    </div>
  );
}

export default Greeting;