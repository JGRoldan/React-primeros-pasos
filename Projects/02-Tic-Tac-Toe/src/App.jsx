import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square"
import { TURNS } from "./constants"
import { checkWinner, checkEndGame } from "./logic/board"
import { Winner } from "./components/Winner"
import { saveGameToStorage, resetGameToStorage } from "./logic/storage"

const App = () => {
  const [board, setBoard] = useState(() => {
    //Devuelve el valor con el que queres inicializar el estado
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem('turn')
    return turnFromLocalStorage ?? TURNS.X
  }) 
  const [winner, setWinner] = useState(null)
  
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameToStorage()
  }

  const updateBoard = (index) => {
    //No actualziar si el board si ya tiene algo
    if(board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    //Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameToStorage(
      {
        board: newBoard,
        turn: newTurn,
      })

    //Revisar ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
      window.removeItem('board')
      window.removeItem('turn')
    }
    //Juego terminado
    else if (checkEndGame(newBoard)) {
      setWinner(false)
    }

  }

  return ( 
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Resetear</button>
      <section className="game">
      {
        board.map((square, index) => { 
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}>
                {square}
            </Square>
          )
        })
      }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}> {TURNS.X} </Square>
        <Square isSelected={turn === TURNS.O}> {TURNS.O} </Square>
      </section>
      <Winner resetGame={resetGame} winner={winner}/>
    </main>
  )
}
 
export default App;