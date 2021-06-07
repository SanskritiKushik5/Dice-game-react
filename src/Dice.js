import {React, useState} from 'react'
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'

const Dice = () => {
    const [rollno, setRollno] = useState(0);
    const rollnumber = (num) => {
        setRollno(num)
    }
    const rollAll = () => {
        this.reactDice.rollAll()
      }
    
    return (
        <div>
           <ReactDice
                numDice={3}
                rollTime={1}
                faceColor={`#ffffe6`}
                dotColor={`#ff3300`}
                disableIndividual={true}
                rollDone={rollnumber}
                ref={dice => this.reactDice = dice}
            /> 
            <button onClick={rollAll}>Click</button>
        </div>
    )
}

export default Dice
