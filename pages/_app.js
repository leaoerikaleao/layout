import React from 'react'
import Link from 'next/link'
import '../css/styles.css'
import '../css/costum.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <div>
            <div className="nav-font text-xl p-4 shadow-md text-center">
                <Link href='/'>
                    <a className="px-2 hover:underline pr-8">Classes Básicas</a>
                </Link>
                <Link href='/flexbox'>
                    <a className="px-2 hover:underline pr-8">Flexbox</a>
                </Link>
                <Link href='/grid'>
                    <a className="px-2 hover:underline pr-8">Grid</a>
                </Link>
            </div>
            <Component {...pageProps} />
        </div>
    )

}

export default MyApp