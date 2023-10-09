import { Routes, Route } from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import './App.css';
import Bar from './navigation';

function App() {
  return (
    // <Bar/>
    <div className="App">
      <Routes>
        <Route path="/" element={<Bar/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
