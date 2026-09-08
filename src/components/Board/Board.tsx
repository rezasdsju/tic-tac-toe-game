
import { useState } from 'react'
import './Board.css'
import Square from './Square/Square'
import calculateWinnner from './Winner/Winner'
export default function Board() {
  const [squares, setSquares] = useState<('X' | 'O' | null)[]>(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState<boolean>(true)


  const handleClick = (i: number): void => {
    
    if (squares[i] || calculateWinnner({ squares })) {
      return
    }
    // const nextSquares = squares.slice()
    const nextSquares = [...squares]
    if (xIsNext) {
      nextSquares[i] = 'X'

    } else {
      nextSquares[i] = 'O'
    }
    setSquares(nextSquares)
    setXIsNext(!xIsNext)


    
  }


  return (

    <>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(0)} value={squares[0]}></Square>
        <Square onSquareClick={() => handleClick(1)} value={squares[1]}></Square>
        <Square onSquareClick={() => handleClick(2)} value={squares[2]}></Square>
      </div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(3)} value={squares[3]}></Square>
        <Square onSquareClick={() => handleClick(4)} value={squares[4]}></Square>
        <Square onSquareClick={() => handleClick(5)} value={squares[5]}></Square>
      </div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(6)} value={squares[6]}></Square>
        <Square onSquareClick={() => handleClick(7)} value={squares[7]}></Square>
        <Square onSquareClick={() => handleClick(8)} value={squares[8]}></Square>
      </div>
    </>
  )
}




