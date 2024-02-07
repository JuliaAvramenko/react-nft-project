import { Routes, Route } from 'react-router-dom';
import React from 'react';
import MainPage from '../../pages/mainPage/mainPage';
import SecondPage from '../../pages/secondPage/secondPage';
import ThirdPage from '../../pages/thirdPage/thirdPage';





function MyRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/secondpage" element={<SecondPage />} />
                <Route path="/thirdpage" element={<ThirdPage />} />

            </Routes>


        </>
    )
}

export default MyRoutes;