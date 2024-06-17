import React , {useState} from 'react'

function MyComponent()
{
    const [foods , setFoods] = useState(["Apple", "Orange"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        //setFoods([...foods, newFood]) // we can do this but, remember to use updater functions as much as possible
        setFoods(f => [...f, newFood])
    }
    function handleRemoveFood(index){
        // Notice why 'i' and 'index' should be different
        setFoods(f => f.filter((food, i) => i !== index))
    }
   
    return (
        <div> 
            <h2> List of Foods </h2>
            <ul>
                {foods.map((food, index) => 
                <li key = {index} onClick = {() => handleRemoveFood(index)} > 
                    {food} 
                </li>)}
                {/* Apparently, list items can be clicked :) */}
            </ul>

            <input type = "text" id = "foodInput" placeholder='Enter Food Name'/>
            <button onClick = {handleAddFood}> Add Food </button>
        </div>
    
    );

}

export default MyComponent