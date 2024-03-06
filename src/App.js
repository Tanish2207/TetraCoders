
import './App.css';

import {Link, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App ">
      <Link to="/login">
        <button>login</button>
      </Link>
    </div>
  );
}

export default App;
