import React, { useState } from 'react'

const Nav = () => {
    const[show,setShow]=useState(false);
    return (
        <>
            <section className="navbar-bg">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">Chetan.</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"
                        onClick={()=>setShow(!show)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className={`collapse navbar-collapse ${show ? "show" : ""}`} >
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#myWork">My Work</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="mailto:chetankumar81000@gmail.com">Get in Touch</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </section>
        </>
    )
}

export default Nav
