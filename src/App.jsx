
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homapage from './homepage'
import Detection from './detection'
import Navbar from './nav'

function App() {


  return (
    <>
    <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path='/' element={<Homapage></Homapage>} />
          <Route path='/detection' element={<Detection></Detection>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
