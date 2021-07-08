import React, {FC} from 'react';
import Card from "./Card";

const Packages: FC = () => {
    return (
        <div className="package">
           <h3>Packages</h3>

            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Packages;
