import React from 'react';
import FireworkItem from './FireworkItem'

const FireworksList = ({ fireworks }) => {
  const list = fireworks.map(firework => <FireworkItem key={ firework.id } firework={ firework } />)
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>All Fireworks</h1>
          <hr/>
          { list }
        </div>
      </div>
    </div>
  )
}

export default FireworksList;
