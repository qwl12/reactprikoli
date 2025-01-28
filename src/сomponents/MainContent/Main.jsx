import './style.css';
import React from 'react';
import {ToggleSquares} from "../sqaresContent/ToggleSqare";
import { Showtext } from '../textContent/showText';

const Main = ({h1,p}) => {

  const Bigtext = ['Я спать. Всем спокойной ночи. Всем пока. ', 'sfddsfds' ,'sdfsdf']
    
 
    return(
        <main>
        <h1>{h1}</h1>
        <p>{p}</p>
        <ToggleSquares />
        <Showtext text = {Bigtext}/>
        </main>
    )
}
export {Main}