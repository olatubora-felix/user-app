
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import UserDetail from './pages/UserDetail';

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users/:userId' element={<UserDetail/>} /> 
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
