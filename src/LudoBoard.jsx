import { useState } from "react";
import "./LudoBoard.css"

export default function LudoBoard() {
    let [moves,setMoves] = useState({blue: 0,green: 0,yellow: 0,red: 0,});


    let updateBlue = () => {
        setMoves({...moves,blue: moves.blue + 1})
    }

    let updateYellow = () => {
        setMoves({...moves,yellow: moves.yellow + 1})
    }

    let updateGreen = () => {
        setMoves({...moves,green: moves.green + 1})
    }

    let updateRed = () => {
        setMoves({...moves,red: moves.red + 1})
    }

    return (
        <div>
            <p>Game begins</p>


            <div>
                <div>
                    <p>Blue moves: {moves.blue}</p>
                    <button onClick={updateBlue} className="bluebtn">+1</button>
                </div>
                <div>
                    <p>Yellow moves: {moves.yellow}</p>
                    <button onClick={updateYellow} className="yellowbtn">+1</button>

                </div>
                <div>
                    <p>Green moves: {moves.green}</p>
                    <button onClick={updateGreen} className="greenbtn">+1</button>


                </div>
                <div>
                    <p>Red moves: {moves.red}</p>
                    <button onClick={updateRed} className="redbtn">+1</button>

                </div>
            </div>
        </div>
    );
}