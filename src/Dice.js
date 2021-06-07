import React from 'react'
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Dice.css";
import swal from 'sweetalert';

const Dice = ({sum}) => {
    return (
        <div className="dice">
           <ReactDice
                numDice={3}
                rollTime={1}
                faceColor={`#ffffe6`}
                dotColor={`#ff3300`}
                disableIndividual={false}
                rollDone={sum}
            /> 
            <div className="timer">
                <CountdownCircleTimer
                    isPlaying
                    duration={60}
                    strokeWidth={6}
                    size={55}
                    colors={[
                        ["#004777", 0.33],
                        ["#F78801", 0.33],
                        ["#A30000", 0.33],
                    ]}
                >
                    {({ remainingTime }) => {
                        if (remainingTime === 0) {
                            swal("Time's up", "You were a bit slow", "error")
                            .then(() => {
                                window.location.reload();
                            })
                        }
                        return remainingTime;
                    }}
                </CountdownCircleTimer>
            </div>
            {/* <Button className="button" variant="contained">Roll!</Button> */}
        </div>
    )
}

export default Dice;
