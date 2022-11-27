import { createBrowserRouter } from 'react-router-dom'
import Layout from '../component/Layout'
import { Control } from '../component/Control'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Control />
            }
        ]
    }
])