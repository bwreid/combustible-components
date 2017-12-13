import React from 'react';

const FireworkAttribute = ({ attribute }) => (
  <li>{ attribute.kind }: { attribute.value }</li>
);

export default FireworkAttribute;
