import PokeMoveCard from './PokeMoveCard.js';
import {moves} from './data.js'

function PokeMoves() {
    return (
        <div>
            <h1>Poke Moves</h1>
            <ul>
                {moves.map(item => (
                    <PokeMoveCard key={item.id} {...item}/>
                ))}
            </ul>
        </div>

     );
}

export default PokeMoves;
