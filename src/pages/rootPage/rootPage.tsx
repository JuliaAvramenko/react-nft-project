import React from 'react'
import Header from '../../components/header/header'
import { Outlet } from 'react-router'

const RootPage = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>

        </>
    )
}

export default RootPage