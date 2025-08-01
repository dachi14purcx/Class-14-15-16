import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,  RouterProvider} from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'

const router = createBrowserRouter([
  {path: '/', Component: App},
  {path:'*', Component: ErrorPage}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
