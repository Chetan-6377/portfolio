import React, { useState } from 'react'
import myWorkApi from './api/myWorkApi'

const MyWork = () => {
    const [workData, setWorkData] = useState(myWorkApi);
    return (
        <>
            <section className="my-work-container " id="myWork">
                <div className="work-container container-fluid">
                    <div className="row work-div">
                        {workData.map((currElem) => {
                            const { id, heading, title1, title2, title3, info, img, project,contentH,content} = currElem;
                            return (
                                <>
                                    <div className="col-12 col-lg-6 work-left-side d-flex justify-content-center align-items-start card ">
                                        <div className="img">
                                            <img src={`${img}`} alt="error" className="img-2 " />
                                        </div>
                                            <div className="content">
                                                <h5 className="latest-work">{contentH}</h5>
                                                {content}
                                               </div>

                                    </div>
                                    <div className="col-12 col-lg-6 work-right-side d-flex justify-content-center align-items-start flex-column ">
                                        <h3 className="latest-work">Latest Work</h3>
                                        <h1 className="display-2">{heading}</h1>
                                        <div className="tag ">
                                            <div className="title">{title1}</div>
                                            <div className="title">{title2}</div>
                                            <div className="title">{title3}</div>
                                        </div>
                                        <p className="main-hero-para">{info}</p>
                                        <div className="btn-border work-button">
                                            <a href={`${project}`}><button className=" btn btn-style ">See live website</button></a>


                                        </div>
                                    </div>
                                    <hr className="hr-tag" />
                                </>
                            )
                        })}
                    </div>
                </div>

            </section>
        </>
    )
}

export default MyWork
