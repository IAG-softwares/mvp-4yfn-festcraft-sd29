import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import DashboardPage from './pages/DashboardPage'
import ConceptsPage from './pages/ConceptsPage'
import InnovationsPage from './pages/InnovationsPage'
import AnalyticsPage from './pages/AnalyticsPage'

function App() {
  return (
    <Layout>
      <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/concepts" element={<ConceptsPage />} />
          <Route path="/innovations" element={<InnovationsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
