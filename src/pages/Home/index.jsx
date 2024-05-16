import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className="container">
            <h1>Home</h1>
            <ul>
                <li>
                    <Link to={"/areac"}>
                        Area
                    </Link>
                </li>
                <li>
                    <Link to={"/language"}>
                        Lenguaje
                    </Link>
                </li>
            </ul>
        </div>
    )
}