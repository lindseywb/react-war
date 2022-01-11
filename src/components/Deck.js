import CardPlayer1 from "./CardPlayer1";
import CardPlayer2 from "./CardPlayer2";

export default function Deck(params) {
    return (
        <div className="deck">
            <div className="cards">
                <CardPlayer1 value={params.values.card1} />
                <CardPlayer2 value={params.values.card2} />
            </div>

            <div className="controls">
                { ! params.gameWon && 
                    <button onClick={params.dealCards}>{params.war ? 'Go to war!' : 'Deal'}</button>
                }

                {params.war && <p className="war-time">It's war time!</p>}   
            </div>
        </div>
    )
};
