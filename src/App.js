
import './App.css';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import CardPage from './pages/CardPage'
import DashBoard from './pages/DashBoard';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/digitalcardPage/:id' element={<CardPage />}></Route>
        <Route path='/dashBoard' element={<DashBoard />}></Route>
        <Route path='/edit/:id' element={<Edit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
