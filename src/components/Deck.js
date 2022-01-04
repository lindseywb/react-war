import CardPlayer1 from "./CardPlayer1";
import CardPlayer2 from "./CardPlayer2";

export default function Deck(params) {
    return (
        <div className="deck">
            cards will be dealt here.
            <CardPlayer1 />
            <CardPlayer2 />
        </div>
    )
};
