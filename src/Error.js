import React from 'react'
import { Link } from "react-router-dom";

function Error() {
    return (
        <div>
            <div className="margin"></div>
            <div className="about-page">
                <h1>OOOOOPS!!! THE DEAD END</h1>
                <Link to='/'>BACK TO HOME</Link>
            </div>
        </div>
    )
}

export default Error
