import { useState } from "react"
import confetti from "canvas-confetti"
import Square from "./components/Square"
import { checkWinner, checkEndGame } from "./logic/board"
import { TURNS } from "./constants"
import { WinnerModal } from "./components/WinnerModal"

function App() {

  const [ board, setBoard ] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if(boardFromStorage) return JSON.parse(boardFromStorage)
    return (Array(9).fill(null))
  })
  const [ turn, setTurn ]     = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
    }
  )
  const [ winner, setWinner ] = useState(null)
    
  const updateBoard = (index) => {
    //Don't change the square if there's something or if there's a winner
    if(board[index] || winner) return
    // update the board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    //Change the turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn) 
    //Save the partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', turn)
    //check if there's a winner
    const newWinner = checkWinner(newBoard) 
    if(newWinner) {
      confetti()
      setWinner(newWinner)
    } else if(checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset</button>
      <section className="game"> 
        {
          board.map((square, index) => {
            return (
              <Square 
                key={index} 
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      <section className="result">
        <WinnerModal winner={winner} resetGame={resetGame} />
      </section>
    </main>
  )
}

export default App
