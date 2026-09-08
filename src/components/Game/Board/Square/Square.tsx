
// import { useState } from 'react'
import './Square.css'
export default function Square({value,onSquareClick}:{value: 'X'|'O'|null, onSquareClick:() => void}){

  return (
    <button onClick={onSquareClick} className='square'>{value}</button>
  )
}