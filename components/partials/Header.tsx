import React, {FC} from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Header: FC = () => {
    return (
        <header>
            <div className="container mx-auto">
                <div className="flex flex-row">
                    <div className="logo p-4 flex-auto">
                        <Image src="/images/logo_01.png" width="186" height="33" placeholder="blur" alt="logo"/>
                    </div>
                    <div className="menu flex-auto">
                        <ul>
                            <li className="p-4"><Link href="/"><a className="font-extrabold">Home</a></Link></li>
                            <li className="p-4"><Link href="/"><a>Portfolio</a></Link></li>
                        </ul>
                    </div>
                    <div className="hire-me p-4 flex-auto">
                        <button className="btn">Hire Me</button>
                    </div>
                </div>
            </div>
        </header>)
}

export default Header;
