import {React, useState} from 'react'
import './App.css';
import Dice from "./Dice";
import Sum from "./Sum";
import {Typography} from "@material-ui/core"

function App() {
  const [rollno, setRollno] = useState(0);
    const rollnumber = (num) => {
        setRollno(num)
    }
  return (
    <div className="app">
      <Typography variant="h2" style={{color: "white"}}>Dice Game</Typography>
      <Dice sum={rollnumber}/>
      <Sum total={rollno}/>
    </div>
  );
}

export default App;
