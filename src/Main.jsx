import logo from './logo.svg';
import './App.css';
import 'w3-css/w3.css';
import Navbar from './components/library/Navbar.jsx';
import Home from './components/library/home.jsx';

function App() {
  return (
    <div className="App ">
      <Home />
      <Navbar />
    </div>
  );
}

export default App;
