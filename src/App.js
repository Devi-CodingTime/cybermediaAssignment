import './App.css';
import { Route,Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
