import { createBrowserRouter } from 'react-router-dom'
import Layout from '../component/Layout'
import { Control } from '../component/Control'
import { System } from '../component/System'
import { EquipmentInformation } from '../component/EquipmentInfo'
import { Monitor } from '../component/Monitor'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Control />
            },
            {
                path: '/system',
                element: <System />
            },
            {
                path: '/info',
                element: <EquipmentInformation />
            },
            {
                path: '/monitor',
                element: <Monitor />
            }
        ]
    }
])