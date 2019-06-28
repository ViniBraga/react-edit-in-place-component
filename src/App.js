import React, { useState } from 'react';
import EditInPlace, { TextArea } from './components/editInPlace';

import './App.css';

function App() {

  const [firstName, setFirstName] = useState('Vinicius');
  const [lastName, setLastName] = useState('Braga');

  return (
    <div className="App">
      <EditInPlace viewAs="h1" value={firstName} onChangeValue={setFirstName}/>
      {/* <EditInPlace viewAs="pre" value={lastName} onChangeValue={setLastName}/> */}
      <TextArea viewAs="pre" value={lastName} onChangeValue={setLastName}/>

      <hr/>
      Name: {firstName} {lastName}

    </div>
  
  );
}

export default App;
