import logo from './logo.svg';
import './App.css';
import RegistrationPage from './Components/Pages/RegistrationPage';
import LoginPage from './Components/Pages/Login';
import At from './Components/Pages/Profile';
import { MainRoutes } from './Components/Router/MainRoutes';

function App() {
  return (
    <div className="App">
      <MainRoutes/>
    </div>
  );
}

export default App;
