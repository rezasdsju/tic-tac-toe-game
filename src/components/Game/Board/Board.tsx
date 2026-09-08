
// import { useState } from 'react'
import './Board.css'
import Square from './Square/Square'
import calculateWinnner from './Winner/Winner'


export default function Board({xIsNext, squares, onPlay}: {
  xIsNext: boolean
  squares: ('X' | 'O' | null)[]
  onPlay: (nextSquares: ('X' | 'O' | null)[]) => void
}) {

    const winner = calculateWinnner({ squares })
    let status;
    if (winner){
      status = `Winner: ${winner}`
    } else {
      status = `Next Player ${xIsNext?'X':'O'}`
    }
  const handleClick = (i: number): void => {
    
    if (calculateWinnner({squares}) || squares[i]) {
      return
    }

    // const nextSquares = squares.slice()
    const nextSquares = [...squares]
    if (xIsNext) {
      nextSquares[i] = 'X'

    } else {
      nextSquares[i] = 'O'
    }
    onPlay(nextSquares)
    // setXIsNext(!xIsNext)


    
  }


  return (

    <>
    <div>Status: {status}</div>
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




