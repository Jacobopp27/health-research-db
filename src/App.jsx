import { Navigate, Route, Routes } from 'react-router-dom'
import LanguageToggle from './components/LanguageToggle'
import Home from './pages/Home'
import IngredientPage from './pages/IngredientPage'

function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', color: '#555' }}>
      <main style={{ paddingTop: 24 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ingredient/:slug" element={<IngredientPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <LanguageToggle />
    </div>
  )
}

export default App
