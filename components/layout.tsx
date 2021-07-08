import React from 'react';
import Head from 'next/head';
import Header from "./partials/Header";
import MyFooter from "./partials/MyFooter";

const Layout = ({children}) => {

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Head>
                <title>Best Design</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main className="flex-grow">
                {children}
            </main>
            <MyFooter/>
        </div>
    );
}

export default Layout;
