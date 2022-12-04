import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Landing , Login} from './components';

const App = () => {
  return (
    <div>
<Router>
  <Routes>
    <Route exact path="/" element={Landing}/>
    <Route exact path="/login" element={Login}/>
  </Routes>
</Router>
</div>
  );
}

export default App
