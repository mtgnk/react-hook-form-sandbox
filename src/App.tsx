import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useForm, NestedValue } from 'react-hook-form/dist/index.ie11';

function App() {

  const {register,reset} = useForm()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <article>
        <form className="form-container">
          <label>
            ID
          </label>
          <input
          name='id'
          ref={register()}
            className='form-control'
          />
          <label>
            名前
          </label>
          <input
          name='name'
          ref={register()}
            className='form-control'
          />
          <label>
            備考
          </label>
          <input
          name='description'
          ref={register()}
            className='form-control'
          />
        </form>
        <button onClick={() => {reset()}}>クリアボタン</button>

      </article>
    </div>
  );
}

export default App;
