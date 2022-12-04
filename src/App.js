import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Landing , Login} from './components';

const App = () => {
  return (
  <Routes>
    <Route  path="/" element={<Landing/>}/>
    <Route  path="/login" element={<Login/>}/>
  </Routes>
  );
}

export default App
