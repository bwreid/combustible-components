import React from 'react';
import FireworkItem from './FireworkItem'

const FireworksList = ({ fireworks, attributes }) => {
  const list = fireworks.map(firework => {
    const fireworkAttributes = firework.attributeIds
      .map(id => attributes.byId[id])
      .reduce((acc, attribute) => {
        acc[attribute.kind] ? acc[attribute.kind].push(attribute) : acc[attribute.kind] = [attribute]
        return acc
      }, {})

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
