import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/button/button'



const ThirdPage = () => {
    return (
        <>
            <Link to={"/"}>Go to Main Page</Link>
            <Link to={"/thirdpage"}>Go to Third Page</Link>

        </>
    )
}

export default ThirdPage