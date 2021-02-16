import React from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { useGlobe } from "./Context";
import { Link } from "react-router-dom";

const Header = () => {
    const {cartNum, showModal, showAlready} = useGlobe();
    return (
        <nav>
            <div className="container">
                <div className="logo">
                    <Link to='/'>
                        <h1>fakeCart</h1>
                    </Link>
                </div>
                <div className="nav-menu">
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/about'>about</Link></li>
                        <li><Link to='/contact'>contact</Link></li>
                    </ul>
                </div>
                <div className="cart-icon">
                    <Link to='/cart'>
                        <MdShoppingCart className='num-icon'/>
                    </Link>
                    <Link to='/cart'>
                        <div className="cart-num">
                            <p>{cartNum}</p>
                        </div>
                    </Link>
                    {showModal && <div className="floating-div">
                    item added
                </div>}
                {showAlready && <div className="floating-div">
                    already added
                </div>}
                </div>
            </div>
        </nav>
    )
}

export default Header
