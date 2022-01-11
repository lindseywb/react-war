import Confetti from 'react-confetti';

export default function GameWon(params) {

    const winner = params.winner === 'You' ? 'You won!' : 'The computer won!'
    return (
        <>
            <Confetti />
            <div className="game-won">
                <h4>{winner}</h4>
                <button onClick={params.onClick}>Deal Again</button>
            </div>
        </>
        
    )
};
