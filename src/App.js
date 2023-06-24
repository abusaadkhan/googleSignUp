import logo from './logo.svg';
import './App.css';
import Signin from './Components/Signin';
import Dashboard from './Components/Dashboard';
import { Outlet } from 'react-router-dom'
import ActivityChart from './Components/ActivityChart';

function App() {
  return (
    <div className='box-border' >
    
      <Outlet/>
    </div>
  );
}

export default App;
