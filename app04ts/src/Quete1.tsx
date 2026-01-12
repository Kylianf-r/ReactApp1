import './App.css';
import psg from './data/data';

export default function Quete1()  {
    const { team, players } = psg;

    return (
        <>
            <h1>
                Quête 1 : List
            </h1>
            <h1>{team}</h1>
            <p>Nombre de joueurs : {players.length}</p>
        </>
    )
}
