export default function Score(params) {
    return (
        <div className="score-card">
            <h4>Scores:</h4>
            <div className="scores">
                <div className="score score-player-1">
                    <p>Computer:</p>
                    <h5>{params.score.player1}</h5>
                </div>
                <div className="score score-player-2">
                    <p>You:</p>
                    <h5>{params.score.player2}</h5>
                </div>
            </div>
        </div>
    )
};
