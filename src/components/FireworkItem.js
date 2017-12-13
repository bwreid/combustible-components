import React from 'react';
import FireworkAttribute from './FireworkAttribute'

const FireworkItem = ({ firework, attributes }) => {
  const lis = Object.keys(attributes).map((kind, i) => {
    const itemAttributes = attributes[kind]
    return <FireworkAttribute key={ i } kind={ kind } attributes={ itemAttributes } />
  })

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
