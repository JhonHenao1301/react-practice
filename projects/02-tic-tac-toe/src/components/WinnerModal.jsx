
import Square from "./Square"

// eslint-disable-next-line react/prop-types
export function WinnerModal({ winner, resetGame }) {
    if (winner === null) return null
    const winnerText = winner === false ? 'Draw' : 'Won'
    return (
        <section className="winner">
            <div className="text">
                <h3> { winnerText } </h3>
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