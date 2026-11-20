import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/layouts/Dashboard'
import Home from './pages/Home'
import CarCreate from './pages/CarCreate'

function App() {
  return (
    <BrowserRouter>
      <Dashboard>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/create" element={<CarCreate />} />
        </Routes>
      </Dashboard>
    </BrowserRouter>
  )
}

export default App
