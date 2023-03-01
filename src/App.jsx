import { HashRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Start from './components/Start'
import './App.css'
import { MyBusinessProvider } from './context/MyBusinessContext'

function App() {

  return (
    <div className="App">
      <MyBusinessProvider>
        <HashRouter>

          <Routes>
              <Route path="/" element={<Start /> } />

              <Route path="/home" element={<Home />} />
          </Routes>

        </HashRouter>
      </MyBusinessProvider>
    </div>
  )
}

export default App
