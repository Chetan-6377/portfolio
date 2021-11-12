import React from 'react'

const WhatIDo = () => {
    return (
        <>
            <section className="work-do-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5 work-do-left-side d-flex  align-items-start flex-column ">
                            <h1 className="display-2">What I Do</h1>
                        </div>
                        <div className="col-12 col-lg-7 work-do-right-side  d-flex justify-content-center align-items-start flex-column ">
                            <h3 className="latest-work">Design</h3>
                            <p className="main-hero-para">I design beautiful and powerful websites for modern businesses. Any business today needs a website that wins customers’ trust and helps you do your business well. I make sure your website is up to that standard.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="want-to-work ">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5  d-flex  align-items-start flex-column ">
                            <h1 className="display-2">Want to work?</h1>
                        </div>
                        <div className="col-12 col-lg-7 want-work-right-side  d-flex justify-content-center align-items-start flex-column ">
                            <p className="main-hero-para">If you need a modern and powerful website for your business, startup or yourself, I am available for work. You can email me directly at 
                             <a href="mailto:chetankumar81000@gmail.com" className="email"> chetankumar81000@gmail.com</a>
                            </p>
                        </div>
                        <footer>
                        <p>© All rights reserved – Chetan Kumar</p>
                        </footer>
                    </div>
                </div>
            </section>

        </>
    )
}

export default WhatIDo
