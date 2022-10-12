import { createBrowserRouter} from "react-router-dom";
import Layout from '../components/Layout/Layout'
import Topics from "../components/Topics/Topics";
import Blogs from "../components/Blogs/Blogs";
import Quizzes from "../components/Quizzes/Quizzes";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Rechart from "../components/Rechart/Rechart";


const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage> ,
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Topics></Topics>,
                loader: async () => fetch('https://openapi.programming-hero.com/api/quiz')
                
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/topics/:id',
                loader: async({ params }) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
                } ,
                element: <Quizzes></Quizzes>
            },
            {
                path: '/rechart',
                loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Rechart></Rechart>
            }
        ]
        
    }
])

export default router;