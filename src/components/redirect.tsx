import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export var Redirect = {
    value: false
}

const RedirectClient = () => {
    let navigate = useNavigate(); 
    
    useEffect(() => {
        let time = setInterval(() => {
            if (!Redirect.value) return;
            Redirect.value = false;
            navigate("/playing");
        },200) 

        return () => clearInterval(time);
    })
}

export default RedirectClient;