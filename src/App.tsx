import React, {FC} from "react";
import "./App.css"
import Avatar from "./components/Avatar";
import Button from "./components/Button";
import Tag from "./components/Tag";

const App: FC = () => {
    return (
        <div className="App">
            <Avatar/>
            <Button/>
            <Tag/>
        </div>
    );
}

export default App;
