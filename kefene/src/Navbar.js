import React , {useState} from 'react'
import './Navbar.css';
import { Link , useNavigate } from 'react-router-dom';

function Navbar() {
   let navigate = useNavigate();


    return (
        <div id='nav-main' style={{ boxShadow : '2px 2px 5px black' , position : 'sticky' , top : '0' , zIndex : '10'}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div style={{ margin : '5px 20px 4px 40px' ,fontFamily: 'monospace'}}>
                        <img src='https://edu-web-fundamentals.web.app/static/media/logo.58169365.png'
                        />
                    <a className="navbar-brand" href="#" style={{fontSize : '26px', marginLeft : '10px' }}>
                        Kefene
                    </a>
                </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='nav-link'  to="/orders">
                                    Orders
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to="/products">
                                    Products
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to="/users">
                                    Users
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-success" type="submit" value='log out' onClick={()=>{
                                navigate('/')
                            }}>
                                Log out
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar