import React , {useState} from 'react'

function MyComponent()
{
    const [car , setCar] = useState({year: 2010, make: "Ford", model:"F1-50"});

    function handleYearChange(event){
        setCar(c => ({... car, year: event.target.value})); // Using the spread operator to copy the existing car object and then changing the year value
    }
    function handleMakeChange(event){
        setCar(c => ({... car, make: event.target.value}));
    }
    function handleModelChange(event){
        setCar(c => ({... car, model: event.target.value}));
    }
    function hadleReset(event){
        setCar(c => ({year: 2010, make: "Ford", model:"F1-50"}));
    }
    return (
        <div>
        <p>Your Favourite Car is: {car.year} {car.make} {car.model}</p>
        
        <input type = "number" value = {car.year} onChange = {handleYearChange}/><br/>
        <input type = "text" value = {car.make} onChange = {handleMakeChange}/><br/>
        <input type = "text" value = {car.model} onChange = {handleModelChange}/><br/>
        <button onClick = {hadleReset}> Reset </button>

        </div>
    );

}

export default MyComponent