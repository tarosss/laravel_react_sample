import React from "react"
import {Link} from "react-router-dom"

export default function GlobalNav(){
    return(
        <nav>
            <div>ssss</div>
            <ul>
                <Link to="/">
                    <li>Top</li>                    
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    )
}

