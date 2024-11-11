import React from 'react';
import Special from './Special';

const Myself = ({asset}) => {
  return (
    <div className='border'>
      <h3>MySelf</h3>
      <Special asset={asset}></Special>
      
    </div>
  );
};

export default Myself;