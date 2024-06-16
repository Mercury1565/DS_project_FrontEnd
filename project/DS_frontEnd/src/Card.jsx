import React from 'react';
import profilePic from './assets/MyPicture.jpg';

function Card()
{
    return(
        <div className = "card">
            <img className = "card_img" src ={profilePic} alt = "profile picture"/>            <h2>Card Title</h2>
            <p>This is the first react card you made!!!</p>
        </div>
    )
}
export default Card;