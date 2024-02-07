import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import RootPage from '../pages/rootPage/rootPage'
import ErrorPage from '../pages/errorPage/errorPage'
import MainPage from '../pages/mainPage/mainPage'
import SecondPage from '../pages/secondPage/secondPage'
import ThirdPage from '../pages/thirdPage/thirdPage'


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <MainPage />
            },
            {
                path: "/secondpage",
                element: <SecondPage />
            },
            {
                path: "/thirdpage",
                element: <ThirdPage />
            }
        ]
    }
])
