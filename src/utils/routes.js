import { createBrowserRouter} from "react-router-dom";
import Layout from '../components/Layout/Layout'
import Home from '../components/Home/Home'
import Topics from "../components/Topics/Topics";
import Blogs from "../components/Blogs/Blogs";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/topics',
                element: <Topics></Topics>,
                loader: async () => fetch('https://openapi.programming-hero.com/api/quiz')
                
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
        
    }
])

export default router;