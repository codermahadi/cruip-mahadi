import React, {FC} from 'react';
import Image from 'next/image';

const Banner: FC = () => {
    return (
        <div className="banner">
            <div className="container mx-auto flex flex-row">
                <div className="banner-left">
                    <p className="text-base text-white font-bold">BUSINESS WORKFLOW</p>
                    <h1>
                        Get the most efficient UI design for your business now!
                    </h1>
                    <p>
                        Hire me to design a clean and modern UI for your product’s website.
                    </p>
                    <ul>
                        <li><button>Hire Me</button></li>
                        <li>PORTFOLIO</li>
                    </ul>
                </div>
                <div className="banner-right">
                    <Image src="/images/image_01.png" width="100%" height="100%" alt="missing"/>
                </div>
            </div>
            <div className="banner-footer">
                <Image src="/images/Shape_01.png" width="100" height="100" alt="missing"/>

            </div>
        </div>
    )
}

export default Banner;
