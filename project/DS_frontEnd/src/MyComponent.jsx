import React, {useState} from 'react';

function MyComponent(){
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment , setComment] = useState("");
    const [payement , setPayement] = useState("");
    const [shipping , setShipping] = useState("");

    function handelNameChange(event){
        setName(event.target.value);
    }
    function handelQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePayementChange(event){
        setPayement(event.target.value);
    }
    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(
       <div>
         <input value = {name}  onChange = {handelNameChange}/>
         <p> Name: {name} </p>

         <input value = {quantity}  onChange = {handelQuantityChange} type = "number"/>
         <p> Quantity: {quantity} </p>

         <textarea value = {comment}  onChange = {handleCommentChange} placeholder='Leave comment'/>
         <p> Comment: {comment} </p>

         <select value = {payement} onChange = {handlePayementChange}>
            <option value = ""> Select an option </option>
            <option value = "Cash"> Cash </option>
            <option value = "Visa"> Visa </option>
            <option value = "MasterCard"> MasterCard </option>
         </select>
         <p> Payement: {payement} </p>

        <label>
            <input type = "radio" 
                    value = "Pick Up"
                    checked = {shipping === "Pick Up"}
                    onChange = {handleShippingChange}/>
            Pick Up
        </label><br/>

        <label>
            <input type = "radio" 
                    value = "Delivery"
                    checked = {shipping === "Delivery"} 
                    onChange = {handleShippingChange}/>
            Delivery
        </label>
        <p> Shipping: {shipping} </p>
       </div>
    );

}
export default MyComponent