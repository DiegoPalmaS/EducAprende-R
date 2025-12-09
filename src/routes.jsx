import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import TimeLGame from './components/Games/TimeLGame/TimeLGame.jsx'
import Index from './Pages/Index.jsx'
import Categories from './Pages/Categories/Categories.jsx'
import CategoryRouter from './components/CategoryRouter.jsx'
import About from './Pages/About/About.jsx'
import Login from './Pages/Login/Login.jsx'
import Register from './Pages/Register/Register.jsx'
import Progreso from './Pages/Progreso/Progreso.jsx'
import NotFound from './Pages/NotFound/NotFound.jsx'
import PrivateRoute from "./components/PrivateRoute.jsx"
import AuthProvider from './context/AuthContext.jsx' 
import { LogrosProvider } from './context/LogrosContext.jsx'
import Layout from './Pages/Layout.jsx'


// en la constante router queda defino el enrutador
// crea el entutador
export const router = createBrowserRouter(
    // crea las rutas
    createRoutesFromElements(
        // un componente "Route" por cada ruta
        // un ruta que envuelve a otra rutas --> LAYOUT
        <Route path="/" element={<AuthProvider><LogrosProvider><Layout /></LogrosProvider></AuthProvider>}>
            <Route path="/" element={<Index />} />
            <Route path="/categorias" element={<Categories />} />
            <Route path="/categorias/:asignatura" element={<CategoryRouter />} />
            <Route path="/juegos/timelgame" element={<TimeLGame />} />
            <Route path="/about" element={<About />} />     
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/perfil" element={<PrivateRoute><Progreso /></PrivateRoute>} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)