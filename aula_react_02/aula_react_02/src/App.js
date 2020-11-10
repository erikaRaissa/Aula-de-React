import './App.css';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function App() {
  const [cont, setCont] = useState(0);

  useEffect(()=>{
    document.title = "Contagem: " + {cont};
  }, [cont]);

  function aumentarAction(){
    setCont(cont + 1);
  };

  return (
    <>
      <h1>Contagem: {cont}</h1>
      <button onClick={aumentarAction}Aumentar></button>

    </>
  );
}

export default App;
