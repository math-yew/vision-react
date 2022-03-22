import { Outlet, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Outlet />
      </header>
    </div>
  );
}

export default App;
