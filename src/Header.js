import React from 'react'

const Header = () => {
    return (
        <>
            <header>

                <section className="container main-hero-container">
                    <div className="row ">
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center align-items-start flex-column ">
                            <h1 className="display-2">
                                Hi, I’m Chetan,<br />Front end Developer
                            </h1>
                            <p className="main-hero-para">I design and bulid user interfaces for businesses. If you need a modern and powerful website, <br />
                            Contact me</p>
                            <div className="input-text">
                                <div className=" btn-border ">
                                    <a href="#myWork">
                                    <button className=" btn btn-style col-6 col-lg-6">See my work</button>
                                    </a>
                                </div>
                                <div className="btn-border">
                                    <a href="mailto:chetankumar81000@gmail.com">
                                    <button className=" btn btn-style col-6 col-lg-6">Contact me</button>
                                    </a>
                                    </div>    
                            </div>
                        </div>
                        {/* *******************right side********************** * */}
                        <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-start  ">
                            <img src="https://media.istockphoto.com/photos/home-office-set-up-with-responsive-snow-mountain-website-picture-id1224339510?k=20&m=1224339510&s=612x612&w=0&h=8tWdmWYurMHZ3Sx6AS8eo-WzXEm0K4HrqCcdDf2Ermk=" alt="error" className="image-fluid img-2" />
                        </div>
                    </div>

                </section>
            </header>
        </>
    )
}

export default Header
