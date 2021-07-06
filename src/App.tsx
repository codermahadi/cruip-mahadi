import React, {FC} from "react";
import "./App.css"
import {FiMinus} from "react-icons/fi";
import user from "./components/user";
import designations from "./components/designations";

const App: FC = () => {
    console.log("user", user, designations);
    return (
        <div className="App">

            <h1>Tree View</h1>
            <ul>
                {designations.filter(designation => designation.layer === 1).slice(1).map((item, i) =>
                    <li key={i}>
                        <FiMinus/> <b>{item.title}: Dr. Ahmed</b>
                        <ul>
                            {designations.filter(designation => designation.layer === 2).map((layerTwo, j) =>
                                <li key={j}>
                                    <FiMinus/> <b>{layerTwo.title}: Dr. Farin</b>
                                    <ul>
                                        <li>
                                            <FiMinus/> <b>Department Head: Dr. Mim</b>
                                            <ul>
                                                <li>
                                                    <FiMinus/> <b>Professor</b>
                                                    <ul>
                                                        <li>
                                                            <FiMinus/> <b>Dr. Ahmed</b>
                                                        </li>
                                                        <li>
                                                            <FiMinus/> <b>Dr. Ahmed</b>
                                                        </li>
                                                        <li>
                                                            <FiMinus/> <b>Dr. Ahmed</b>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <FiMinus/> <b>Associate Professor</b>
                                                    <ul>
                                                        <li>
                                                            <FiMinus/> <b>Dr. Ahmed</b>
                                                        </li>
                                                        <li>
                                                            <b>Dr. Ahmed</b>
                                                        </li>
                                                        <li>
                                                            <FiMinus/> <b>Dr. Ahmed</b>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <FiMinus/> <b>Assistant Professor</b>
                                                    <ul>
                                                        <li>
                                                            <b>Dr. Ahmed</b>
                                                        </li>
                                                        <li>
                                                            <b>Dr. Ahmed</b>
                                                        </li>
                                                        <li>
                                                            <FiMinus/> <b>Dr. Ahmed</b>
                                                        </li>
                                                        <li>
                                                            <b>Dr. Ahmed</b>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            )}

                            {designations.filter(designation => designation.layer === 3).slice(1).map((layerThree, k) =>
                                <li key={k}>
                                    <FiMinus/> <b>{layerThree.title}: Dr. Farin</b>
                                    <ul>
                                        <li>
                                            <FiMinus/> <b>Department Head: Dr. Mim</b>
                                            <ul>
                                                <li>
                                                    <FiMinus/> <b>Professor</b>
                                                    <ul>
                                                        <li>
                                                            <FiMinus/> <b>Dr. Ahmed</b>
                                                        </li>
                                                        <li>
                                                            <FiMinus/> <b>Dr. Ahmed</b>
                                                        </li>
                                                        <li>
                                                            <FiMinus/> <b>Dr. Ahmed</b>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <FiMinus/> <b>Associate Professor</b>
                                                    <ul>
                                                        <li>
                                                            <FiMinus/> <b>Dr. Ahmed</b>
                                                        </li>
                                                        <li>
                                                            <b>Dr. Ahmed</b>
                                                        </li>
                                                        <li>
                                                            <FiMinus/> <b>Dr. Ahmed</b>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <FiMinus/> <b>Assistant Professor</b>
                                                    <ul>
                                                        <li>
                                                            <b>Dr. Ahmed</b>
                                                        </li>
                                                        <li>
                                                            <b>Dr. Ahmed</b>
                                                        </li>
                                                        <li>
                                                            <FiMinus/> <b>Dr. Ahmed</b>
                                                        </li>
                                                        <li>
                                                            <b>Dr. Ahmed</b>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            )}

                            {designations.filter(designation => designation.layer === 4).slice(1).map((layerFour, l) =>
                                <li key={l}>
                                    <FiMinus/> <b>{layerFour.title}</b>
                                        <ul>
                                            <li>Dr. Mim</li>
                                            <li>Mr. Yatin</li>
                                        </ul>
                                </li>
                            )}
                        </ul>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default App;
