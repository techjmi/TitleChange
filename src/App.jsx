import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

export default function App() {
  const [num, setNum] = useState(0); // Corrected the syntax
useEffect(()=>{
  document.title=`you clicked ${num} times`;
})
  const click = () => {
    setNum(num + 1);
  }

  return (
    <>
      <h1>{num}</h1>
      <button onClick={click}>click me</button>
    </>
  );
}
