import React from 'react'
import { useState } from 'react';

function User() {

    let [name, setName] = useState("Saurabh");

    function changeName() {
        setName("Thor");
        console.log("new name is " + name);
    }

    function doSomething(planet) {
        
        console.log(planet);
    }


    return (
        <div className="user">
            <h1>User Component</h1>
            <h2>{name}</h2>
            <button onClick={changeName}>Change Name</button>
            {/* You need to use an anonymous function to pass an argument or the function will be called immediately and not update the state */}
            <button onClick={function(){
                doSomething("Earth");
            }}>Do Something</button>
            {/* You can also use arrow function 
            <button onClick={()=>{
                doSomething("Earth");
            }}>Do Something</button>
            */}

        </div>

    )
}

export default User;
