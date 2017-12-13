import React from 'react';

const FireworksList = ({ fireworks }) => (
  <div className='container'>
    <div className='row'>
      <div className='col'>
        <h1>All Fireworks</h1>
        { JSON.stringify(fireworks) }
      </div>
    </div>
  </div>
);

export default FireworksList;
