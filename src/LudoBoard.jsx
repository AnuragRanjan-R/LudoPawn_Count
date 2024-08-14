import { useState } from "react";
export default function LudoBoard(){

    let [pawnMove , setPawnMove] = useState({blue:0 , yellow:0 , green:0 , red:0});

    let updateBlue = () => {
        console.log(`pawnMove.blue = ${pawnMove.blue}`); //prints 0 ( count = 0)
        setPawnMove((prevMove) => {                      //update on +1 
            return(
                {...prevMove, blue: prevMove.blue+1}
            )
        });
    };
    let updateRed = () => {
        console.log(`pawnMove.red = ${pawnMove.red}`);
        setPawnMove((prevMove) => {
            return(
                {...prevMove, red: prevMove.red+1}
            )
        });
    };
    let updateYellow = () => {
        console.log(`pawnMove.yellow = ${pawnMove.yellow}`);
        setPawnMove((prevMove) => {
            return(
                {...prevMove, yellow: prevMove.yellow+1}
            )
        });
    };
    let updateGreen = () => {
        console.log(`pawnMove.green = ${pawnMove.green}`);
        setPawnMove((prevMove) => {
            return(
                {...prevMove, green: prevMove.green+1}
            )
        });
    };
    
    return(
        <div>
            <p>Game Begins!</p>
            <div className="board">

                <p>Blue Moves = {pawnMove.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow Moves = {pawnMove.yellow}</p>
                <button style={{backgroundColor:"yellow" , color:"black"}} onClick={updateYellow}>+1</button>
                <p>Green Moves = {pawnMove.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                <p>Red Moves = {pawnMove.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
                
            </div>
        </div>
    );
}