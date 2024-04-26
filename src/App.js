import './App.css';
import { Route,Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;


// 
// "react-facebook-login": "^4.1.1",