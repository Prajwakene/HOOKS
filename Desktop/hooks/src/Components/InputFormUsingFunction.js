//Hooks
import { useState, useEffect } from "react";

//functional component
export default function Input(){
    // this has the two function name ans setName
    //initially the the state will be harry at initial render
    const [name,setName] = useState("Prajwal")
    const [lastName,setLastName] = useState("Kene")

    useEffect(() => {
        document.title=name + " " +lastName;
    },[lastName])

    return(
        <>
        <div className="section">
            <Row label="Name">
                    <input className="input" value={name}
                    onChange={(e) => setName(e.target.value)}/>
            </Row >
            <Row label="Last Name">
                <input className="input" value={lastName}
                onChange={(e) => setLastName(e.target.value)}/>
            </Row >
        </div>

        <h2>Hello, {name + " "+ lastName}</h2>
        
        </>
        )
    }


function Row(props){
    const{label} = props;
    return(
        <>
        <lable>{label}<br/></lable>
        {props.children}
        <hr />
        </>
    )
}
