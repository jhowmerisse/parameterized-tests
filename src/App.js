import React, {useState} from 'react';
import './App.css';

const App = () => {

  const [value, setValue] = useState('')

  const validateValue  = e => {
    //lógical part
    setValue(e.target.value)
  };

  return (
    <div className="App">
      <input
        onChange={() => validateValue}
        type='text'
      />
      <label>{value}</label>
    </div>
  );
}

export default App;
