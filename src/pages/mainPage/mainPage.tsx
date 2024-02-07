import React from 'react'
import { Link } from 'react-router-dom'




const MainPage = () => {
    return (
        <>
            <Link to={"/secondpage"}>Go to Second Page</Link>
            <Link to={"/thirdpage"}>Go to Third Page</Link>


        </>
    )
}

export default MainPage