import React, { useState } from 'react';
import styled from 'styled-components';
import { Textarea, TextInput } from '../lib';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding: 20px;
  
  p{
    margin-top: 20px;
    margin-bottom: 5px;
  }

  .wrapper{
    width: 400px;
  }
`;

const App = () => {
  const [inputA, setInputA] = useState('');

  return (
    <Container>
      <div className="wrapper">
        <h3>Text Input</h3>

        <p>Regular Input</p>
        <TextInput
          value={inputA}
          onChange={(e) => setInputA(e.target.value)}
          placeholder="Placeholder"
        />

        <p>Placeholder + Persistent Label</p>
        <TextInput
          value={inputA}
          onChange={(e) => setInputA(e.target.value)}
          placeholder="Placeholder"
          persistentLabel="Persistent Label"
        />

        <p>Persistent Label also acting as a placeholder</p>
        <TextInput
          value={inputA}
          onChange={(e) => setInputA(e.target.value)}
          persistentLabel="Persistent Label"
        />

        <p>Persistent Label without placeholder</p>
        <TextInput
          value={inputA}
          onChange={(e) => setInputA(e.target.value)}
          persistentLabel="Persistent Label"
          placeholder=" "
          maxLength={10}
        />

        <p>Character Limit</p>
        <TextInput
          value={inputA}
          onChange={(e) => setInputA(e.target.value)}
          placeholder="Placeholder"
          maxLength={10}
        />

        <h3>Text Area</h3>

        <p>Regular Input</p>
        <Textarea
          value={inputA}
          onChange={(e) => setInputA(e.target.value)}
          placeholder="Placeholder"
        />

        <p>Placeholder + Persistent Label</p>
        <Textarea
          value={inputA}
          onChange={(e) => setInputA(e.target.value)}
          placeholder="Placeholder"
          persistentLabel="Persistent Label"
        />

        <p>Persistent Label also acting as a placeholder</p>
        <Textarea
          value={inputA}
          onChange={(e) => setInputA(e.target.value)}
          persistentLabel="Persistent Label"
        />

        <p>Persistent Label without placeholder</p>
        <Textarea
          value={inputA}
          onChange={(e) => setInputA(e.target.value)}
          persistentLabel="Persistent Label"
          placeholder=" "
          maxLength={10}
        />

        <p>Character Limit</p>
        <Textarea
          value={inputA}
          onChange={(e) => setInputA(e.target.value)}
          placeholder="Placeholder"
          maxLength={10}
        />
      </div>
    </Container>
  );
};

export default App;
