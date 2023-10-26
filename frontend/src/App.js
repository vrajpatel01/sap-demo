import { Routes, Route } from 'react-router-dom'
import { RequireAuth } from "react-auth-kit";

import Login from './Login.jsx'
import Dashboard from './Dashboard.jsx'
import Contact from './Contactme.jsx'
import About from './AboutMe.jsx'
import Signup from './SIgnup.jsx'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <RequireAuth loginPath='/login'>
            <Dashboard />
          </RequireAuth>
        } exact />
        <Route path="/about" element={
          <RequireAuth loginPath='/login'>
            <About />
          </RequireAuth>
        } />
        <Route path="/contact" element={
          <RequireAuth loginPath='/login'>
            <Contact />
          </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
