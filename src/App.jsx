import { Routes, Route } from 'react-router-dom';
import Home from './views/home/Home';
import Questions from './views/Questions/Questions';
import './App.css'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/questions/:id' element={<Questions/>}/>
      </Routes>
    </>
  )
}

export default App
