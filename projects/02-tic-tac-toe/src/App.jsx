import { useState } from "react"
import confetti from "canvas-confetti"
import Square from "./components/Square"
import checkWinner from "./logic/board"
import { TURNS } from "./constants"

function App() {
  const [ board, setBoard ]   = useState(Array(9).fill(null))
  const [ turn, setTurn ]     = useState(TURNS.X)
  const [ winner, setWinner ] = useState(null)

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }
    
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
        { 
          winner !== null && (
            <section className="winner">
              <div className="text">
                <h3>
                  {
                    winner === false ? 'Draw' : 'Won'
                  }
                </h3>
                <header className="win">
                  { winner && <Square>{winner}</Square>}
                </header>
                <footer>
                  <button onClick={resetGame}>Start again</button>
                </footer>
              </div>
            </section>
          ) 
        }
      </section>
    </main>
  )
}

export default App
