import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PuffLoader } from 'react-spinners'
import { Suspense, lazy } from 'react'


const CoverPage = lazy(() => import("../pages/CoverPage"))

function App() {


  return (
   <Router>
    <Suspense fallback={<PuffLoader/>}>
    <Routes>
      <Route path="/" element={<CoverPage/>}/>
    </Routes>
      
    </Suspense>
   </Router>
  )
}

export default App
