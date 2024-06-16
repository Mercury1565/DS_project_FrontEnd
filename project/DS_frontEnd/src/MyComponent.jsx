import React, {useState} from 'react';

function MyComponent(){
    const [name , setName] = useState('Guest');
    const [age , setAge] = useState(0);
    const [isStudent , setBoolean] = useState(false);

    const updateName = () => {
        setName("Hermon")
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const toogleBoolean = () => {
        setBoolean(!isStudent)
    }


    return(
        <div>
            <p> Name: {name}</p>
            <button onClick = {updateName}> Set Name </button>

            <p> Age: {age}</p>
            <button onClick = {incrementAge}> Increment Age </button>

            <p> Is student: {isStudent ? "YES" : "NO"} </p>
            <button onClick = {toogleBoolean}> Toogle Boolean </button>
        </div>
    );

}
export default MyComponent