import React from 'react';
import './App.css';
import { isType } from "@util";
import { AutoThumb, InputCount } from "@component";

function App() {
  const temp = [1, 2, 3]
  const obj = {
    a: {
      name: 'react',
      version: '16.9'
    },
    b: 2
  }
  console.log(obj?.b.c, '==============', obj?.a?.name);
  console.log(isType(obj), '==++++++++++++', isType(obj.b));
  
  
  return (
    <div >
      <h3>Custome-Cra-Config</h3>
      <p>{process.env.REACT_APP_DOMAIN}</p>
      <InputCount />
      <AutoThumb />
    </div>
  );
}

export default App;
