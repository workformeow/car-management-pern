import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/layouts/Dashboard'
import Home from './pages/Home'
import CarCreate from './pages/CarCreate'
import CarUpdate from './pages/CarUpdate'

function App() {
  return (
    <BrowserRouter>
      <Dashboard>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/create" element={<CarCreate />} />
          <Route path="/:id/update" element={<CarUpdate />} />
        </Routes>
      </Dashboard>
    </BrowserRouter>
  )
}

export default App
