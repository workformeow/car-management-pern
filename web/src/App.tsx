import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/layouts/Dashboard'
import Home from './pages/Home'

function App() {
  return (
    <Dashboard>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </Dashboard>
  )
}

export default App
