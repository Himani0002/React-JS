import React from 'react';
import Ex2 from './Ex2';

const Ex1 = (props) => {
  return (
    <>
      <h1>Hi, I am Example 1 {props.name}</h1>
      {/* Corrected the prop name */}
      <Ex2 user={props.name} />
    </>
  );
};

export default Ex1;
