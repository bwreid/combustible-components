import React from 'react';
import FireworkAttribute from './FireworkAttribute'

const FireworkItem = ({ firework, attributes }) => {
  const lis = attributes.map(attribute => <FireworkAttribute key={ attribute.id } attribute={ attribute } />)
  return (
    <div>
      <h2>{ firework.name }</h2>
      <ul>
        { lis }
      </ul>
    </div>
  );
}

export default FireworkItem;
