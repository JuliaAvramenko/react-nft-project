import React from 'react'
import { Link } from 'react-router-dom'




const SecondPage = () => {
    return (
        <>
            <Link to={"/"}>Go to Main Page</Link>
            <Link to={"/thirdpage"}>Go to Third Page</Link>

        </>
    )
}

export default SecondPage