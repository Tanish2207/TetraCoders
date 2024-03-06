
import './App.css';
import Studentregistration from './components/login/registrationpage1';
import Companyregistration from './components/login/registrationpage2';
import Collegeregistration from './components/login/registrationpage3';


function App() {
  return (
    <div className="App ">
      <Studentregistration/>
      <Companyregistration/>
      <Collegeregistration/>
    </div>
  );
}

export default App;
