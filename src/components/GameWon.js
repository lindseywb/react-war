import Confetti from 'react-confetti';

export default function GameWon(params) {
    return (
        <>
            <Confetti />
            <div className="game-won">
                <h4>Player {params.winner} has won the game!</h4>
                <button onClick={params.onClick}>Play Again</button>
            </div>
        </>
        
    )
};
