import Truckcontext from "./Truckcontext";
import { React } from "react";
import { useState } from "react";

const Truckstate = (props) => {
    // ITS A WAY TO PROVIDE EVERY STATE IN EVERY COMPONENTS OF THE APP

    const [froml, setfroml] = useState([]) 
    const [tol, settol] = useState([]) 

    const submit = (q,statusa) => {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        const formdata = { "search": "a" }
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://truck.pantheondigitals.com/api/location?search="+q, requestOptions)
            .then(response => response.json())
            .then((result) => {
                if(statusa=='from'){
                    setfroml(result.data);
                }else{
                    settol(result.data);
                }
            })
            .catch(error => console.log('error', error));
    };
    return (
        <Truckcontext.Provider
            value={{ tol, settol, froml, setfroml, submit }}
        >
            {/* IT IS THE SYNTAX TO USE THE USECONTEXT API */}
            {props.children}
        </Truckcontext.Provider>
    );
}

export default Truckstate;