import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import { Navigate, Route,Routes } from 'react-router-dom';
// import Pages from './Pages/Pages';
import React from 'react';
const Pages=React.lazy(()=>import('./Pages/Pages'))

function App() {
  return (
    <div className="App">
     <h1>app</h1>
    
     <Routes>
      <Route path='/' element={<Navigate to='Login'/>}></Route>
      <Route path='/Login' element={<Login></Login>}></Route>
      <Route path='/Pages/*' element={<Pages></Pages>}></Route>

     </Routes>
    </div>
  );
}

export default App;
