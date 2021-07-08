import React, { useEffect } from 'react';
import 'tailwindcss/tailwind.css'
import '../css/style.scss';

import AOS from 'aos';

function MyApp({Component, pageProps}) {

    useEffect(() => {
        AOS.init({
            once: true,
            disable: 'phone',
            duration: 700,
            easing: 'ease-out-cubic',
        });
    });

    return (<Component {...pageProps} />)
}

export default MyApp
