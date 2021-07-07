import React, {FC, useState} from "react";
import "./App.css"
import {FiMinus} from "react-icons/fi";
import {FiPlus} from "react-icons/fi";
import user from "./components/user";
import designations from "./components/designations";
import UserInterface from "./components/type/userType";

const App: FC = () => {
    const [viceC, setViceC] = useState(false);
    const [fh, setFh] = useState(false);
    const [swic, setSwic] = useState(false);
    const [aic, setAic] = useState(false);
    const [dh, setDh] = useState(false);
    const [prof, setProf] = useState(false);
    const [aprof, setAProf] = useState(false);
    const [asprof, setAsProf] = useState(false);

    const getUser = (userId: number) => {
        let us: UserInterface | undefined = user.find(us => us.id === userId);
        return us;
    };
    return (
        <div className="App">

            <h1>Tree View</h1>
            <ul className="tree-view">
                {designations.filter(designation => designation.layer === 1).map((item, i) =>
                    <li key={i}>
                        <span className="vC" onClick={() => setViceC(!viceC)}>{viceC ? <FiMinus/> : <FiPlus/>
                        }<b>{item.title}:</b> {getUser(item.userId)?.name}</span>
                        <ul className={viceC ? 'open' : 'close'}>
                            {designations.filter(designation => designation.layer === 2).map((layerTwo, j) =>
                                <li key={j}>
                                    <span className="vC" onClick={() => setFh(!fh)}>{fh ? <FiMinus/> :
                                        <FiPlus/>}<b>{layerTwo.title}:</b> {getUser(item.userId)?.name}</span>
                                    <ul className={fh ? 'open' : 'close'}>
                                        <li>
                                            <span className="vC" onClick={() => setDh(!dh)}>{dh ? <FiMinus/> :
                                                <FiPlus/>}<b>{designations.filter(designation => designation.layer === 5)[0].title}: </b>
                                                {getUser(designations.filter(designation => designation.layer === 5)[0].userId)?.name}</span>
                                            <ul className={dh ? 'open' : 'close'}>
                                                <li>
                                                    <span className="vC" onClick={() => setProf(!prof)}>{prof ?
                                                        <FiMinus/> :
                                                        <FiPlus/>}<b><b>Professor</b>:</b></span>
                                                    <ul className={prof ? 'open' : 'close'}>
                                                        {designations.filter(designation => designation.layer === 6).map((layerSix, six) =>
                                                            <li key={six}>
                                                                <FiMinus/>{getUser(layerSix.userId)?.name}
                                                                <ul>
                                                                    {designations.filter(designation => designation.userId === getUser(layerSix.userId)?.id && ![6, 7, 8].includes(designation.layer)).map((des, i) =>
                                                                        <li key={i}>{des.title}</li>
                                                                    )}
                                                                </ul>
                                                            </li>
                                                        )}
                                                    </ul>
                                                </li>

                                                <li>
                                                              <span className="vC"
                                                                    onClick={() => setAProf(!aprof)}>{aprof ?
                                                                  <FiMinus/> :
                                                                  <FiPlus/>}<b><b>Associate Professor</b>:</b></span>
                                                    <ul className={aprof ? 'open' : 'close'}>
                                                        {designations.filter(designation => designation.layer === 7).map((layerSeven, seven) =>
                                                            <li key={seven}>
                                                                <FiMinus/> {getUser(layerSeven.userId)?.name}
                                                                <ul>
                                                                    {designations.filter(designation => designation.userId === getUser(layerSeven.userId)?.id && ![6, 7, 8].includes(designation.layer)).map((des, i) =>
                                                                        <li key={i}>{des.title}</li>
                                                                    )}
                                                                </ul>
                                                            </li>
                                                        )}
                                                    </ul>
                                                </li>

                                                <li>
                                                                 <span className="vC"
                                                                       onClick={() => setAsProf(!asprof)}>{asprof ?
                                                                     <FiMinus/> :
                                                                     <FiPlus/>}<b><b>Assistant Professor</b>:</b></span>
                                                    <ul className={asprof ? 'open' : 'close'}>
                                                        {designations.filter(designation => designation.layer === 7).map((layerEight, eight) =>
                                                            <li key={eight}>
                                                                <FiMinus/>{getUser(layerEight.userId)?.name}
                                                                <ul>
                                                                    {designations.filter(designation => designation.userId === getUser(layerEight.userId)?.id && ![6, 7, 8].includes(designation.layer)).map((des, i) =>
                                                                        <li key={i}>{des.title}</li>
                                                                    )}
                                                                </ul>
                                                            </li>
                                                        )}
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            )}


                            <li>
                                <span className="vC" onClick={() => setSwic(!swic)}>{swic ? <FiMinus/> : <FiPlus/>}
                                    <b>{designations.filter(designation => designation.layer === 3)[0].title}</b></span>
                                <ul className={swic ? 'open' : 'close'}>
                                    {designations.filter(designation => designation.layer === 3).map((layerThree, k) =>
                                        <li key={k}>{getUser(layerThree.userId)?.name}</li>
                                    )}
                                </ul>
                            </li>

                            <li>
                                <span className="vC" onClick={() => setAic(!aic)}>{aic ? <FiMinus/> : <FiPlus/>}
                                    <b>{designations.filter(designation => designation.layer === 4)[0].title}</b></span>
                                <ul className={aic ? 'open' : 'close'}>
                                    {designations.filter(designation => designation.layer === 4).map((layerFour, k) =>
                                        <li key={k}>
                                            {getUser(layerFour.userId)?.name}
                                        </li>
                                    )}
                                </ul>
                            </li>
                        </ul>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default App;
