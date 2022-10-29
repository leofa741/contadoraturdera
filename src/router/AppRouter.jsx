
import{Route, Routes} from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { ContentAuth } from '../contenido/routes/ContentAuth'

export const AppRouter = () => {
  return (
    <Routes>

          <Route   path="/auth/*" element={<AuthRoutes />} />

          <Route path="/*" element={<ContentAuth />} />

    </Routes>
  )
}
