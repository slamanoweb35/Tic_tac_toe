import callInfo from "../types/callAlert";
import { useState,useReducer,useEffect } from "react";
import "../css/alert.css";

const Info = () => {
    var [hidden,setHidden] = useState(true);

    useEffect(() => {        
        let time = setInterval(() => {
            if (!callInfo.active) return setHidden(true);;
            setHidden(false);
        },100)

        return () => clearInterval(time);
    })

    return (<>
        <h1 id="warn2" hidden={hidden}>{callInfo.message}</h1>
    </>)
}

export {Info}