import React from 'react';

const FireworkAttribute = ({ kind, attributes }) => {
  const values = attributes.map(attribute => attribute.value).join(', ')

  return (
    <li>{ kind }: { values }</li>
  );
}

export default FireworkAttribute;
