import React from 'react';
import FireworkItem from './FireworkItem'

const FireworksList = ({ fireworks, attributes }) => {
  const list = fireworks.map(firework => {
    const fireworkAttributes = attributes.filter(attribute => firework.attributeIds.includes(attribute.id))
    return <FireworkItem key={ firework.id } firework={ firework } attributes={ fireworkAttributes }/>
  })
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
