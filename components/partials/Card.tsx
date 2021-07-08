import React, {FC} from 'react';

interface propsInterface {
    pOne: string,
    headThee: string,
    text: string
}

const Card = ({pOne, headThee, text}: propsInterface) => {
    return (
        <div className="card">
            <p>GETTING STARTED</p>
            <h3>Singularity</h3>
            <p>
                This package will suit you if you want a single page simple website for you product. It will cover only
                one web UI. You can revise the design for 2 times after the initial draft discussion session…
            </p>
            <button className="">
                See more
            </button>
        </div>
    )
}

export default Card;
