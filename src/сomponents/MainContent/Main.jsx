import './style.css';
import React from 'react';
import {ToggleSquares} from "../sqaresContent/ToggleSqare";
import { Showtext } from '../textContent/showText';
import DropdownList from '../dropDownContent/dropDown';
import StarRating from '../selectStarsContent/selectedStars';


const Main = ({h1,p}) => {

  const Bigtext = ['Я спать. Всем спокойной ночи. Всем пока. ', 'sfddsfds' ,'sdfsdf']
    
 
    return(
        <main>
        <h1>{h1}</h1>
        <p>{p}</p>
        <ToggleSquares />
        <Showtext text = {Bigtext[0]}/>
        <DropdownList  />

        <StarRating maxStars = {5} selectedStars = {3}/>
        </main>
    )
}
export {Main}