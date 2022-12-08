import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Landing , Login, SignUp, Deals} from './components';

const App = () => {
  return (
  <Routes>
    <Route  path="/" element={<Landing/>}/>
    <Route  path="/login" element={<Login/>}/>
    <Route  path="/signup" element={<SignUp/>}/>
    <Route  path="/deals" element={<Deals/>}/>
  </Routes>
  );
}

export default App
