import React, { useState, useEffect } from 'react'
import Header from './Header'
import MyWork from './MyWork'
import Nav from './nav'
import WhatIDo from './WhatIDo'
import SyncLoader from "react-spinners/SyncLoader";


const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 4000);
    }, [])
    return (
        <>
            {
                loading ?
                <div className="app">
                    <SyncLoader color={"#fff"} loading={loading} size={20} />
                </div>
                    :
                    <>
                        <Nav />
                        <Header />
                        <MyWork />
                        <WhatIDo />

                    </>
            }

        </>
    )

}
export default App