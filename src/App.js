import logo from './logo.svg';
import './App.css';
import Caver from 'caver-js';

const caver = new Caver('https://kaikas.baobab.klaytn.net:8651/');

console.log(caver);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save tofgfjhfgrfghfhdfs reload.
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
    </div>
  );
}

export default App;
