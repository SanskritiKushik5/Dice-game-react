import React from 'react'
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'
import {Button} from '@material-ui/core';
import "./Dice.css";

const Dice = ({sum}) => {
    
    return (
        <div>
           <ReactDice
                numDice={3}
                rollTime={1}
                faceColor={`#ffffe6`}
                dotColor={`#ff3300`}
                disableIndividual={false}
                rollDone={sum}
            /> 
            <Button className="button" variant="contained">Roll!</Button>
        </div>
    )
}

export default Dice;
