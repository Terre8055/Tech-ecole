import React from "react";
// import { preview } from "vite";

function PageElement(){
    const[name, setName] = React.useState('')

    function newName(){
        const usrName = document.querySelector(".body--text");
        setName(usrName.value);
    }

    return(
        <div className="main--page">
            <input type="text" placeholder="Enter your name here" className="body--text"/>
            <h1 className="new">
                Hi {name}
            </h1>
            <button type="submit" onClick={newName} className="new--btn">
                Submit
            </button>
        </div>
        
    )
}


export default PageElement;