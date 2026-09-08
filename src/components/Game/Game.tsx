import { useState } from "react"
import Board from "./Board/Board"

export default function Game() {
    // const [xIsNext, setXIsNext] = useState<boolean>(true)
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)
    const xIsNext = currentMove%2===0
    const currentSquares = history[currentMove]
    const handlePlay = (nextSquares: any[]) => {
        const nextHistory = [...history.slice(0,currentMove+1),nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length-1)
        // setXIsNext(!xIsNext)
    }

    function jumpTo(nextMove: number) {
        console.log(nextMove)
        setCurrentMove(nextMove)
        // setXIsNext(nextMove%2===0)
    }
    const moves = history.map((_, move) => {
        let description;
        if (move > 0) {
            description = `Go to move # ${move}`
        } else {
            description = `Go To game start`
        }
        return (
            <li>
                <button onClick={() => jumpTo(move)}> {description}</button>
            </li>
        )
    })
    return (
        <div>
            <div>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}></Board>
            </div>
            <div>
                <ol>
                    {moves}
                </ol>
            </div>
        </div>
    )
}
