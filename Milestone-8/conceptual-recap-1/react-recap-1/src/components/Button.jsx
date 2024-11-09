import React from 'react';

const Button = ({count,onClick}) => {
  return (
    <div>
      <button onClick={onClick}>Clicked {count} times</button>
    </div>
  );
};

export default Button;