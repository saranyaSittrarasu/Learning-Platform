// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/Login'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Navbar } from './pages/Navbar'
import { NoMatch } from './pages/NoMatch'
import {Courses} from './pages/Courses'
import { FrontEndCourse } from './pages/FrontEndCourse'
import { BackEndCourse } from './pages/BackEndCourse'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='courses' element={<Courses/>}><Route path='frontend' element={<FrontEndCourse/>}/>
      <Route path='backend' element={<BackEndCourse/>}/></Route>
      <Route path='*' element={<NoMatch/>}/>
    </Routes>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <LoginPage/> */}
    </>
  )
}

export default App
