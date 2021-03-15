import React, { Component } from 'react'
import '../css/globals.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <div>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp