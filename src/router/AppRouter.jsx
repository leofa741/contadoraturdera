
import{Route, Routes} from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { NavBar ,Social} from '../contenido/components'


import { RoutesContent } from '../contenido/routes/RoutesContent'

export const AppRouter = () => {
  return (
<>


<NavBar />

    <Routes>
          <Route   path="/auth/*" element={<AuthRoutes />} />
          <Route path="/*" element={<RoutesContent />} />
    </Routes>
  <Social />
    </>
  )
}
