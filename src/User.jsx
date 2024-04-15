import React from 'react'
import { useState } from 'react';

function User() {

    let [name, setName] = useState("Saurabh");

    function changeName() {
        setName("Thor");
        console.log("new name is " + name);
    }
    return (
        <div className="user">
            <h1>{name}</h1>
            <button onClick={changeName}>Change Name</button>
        </div>

    )
}

export default User;
