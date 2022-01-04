import CardPlayer1 from "./CardPlayer1";
import CardPlayer2 from "./CardPlayer2";

export default function Deck(params) {

    return (
        <div className="deck">
            <CardPlayer1 value={params.values.card1} />
            <CardPlayer2 value={params.values.card2} />

            <button onClick={params.dealCards}>Deal</button>
        </div>
    )
};
