import React, { useState } from 'react';
import { TextInput } from '../lib';

const App = () => {
  const [inputA, setInputA] = useState('');

  return (
    <div>

      <TextInput
        value={inputA}
        onChange={(e) => setInputA(e.target.value)}
        placeholder="Placeholder"
      />

    </div>
  );
};

export default App;
