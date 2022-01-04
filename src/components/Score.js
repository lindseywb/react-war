export default function Score(params) {
    return (
        <div className="score-card">
            <div className="score score-player-1">
                <p>Player 1:</p>
                {params.score.player1}
            </div>
            <div className="score score-player-2">
                <p>Player 2:</p>
                {params.score.player2}
            </div>
        </div>
    )
};
