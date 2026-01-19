import './App.css';
import psgData from './data/data';

export default function TeamHeader()  {
    const { team, players, season } = psgData;

    return (
        <>
            <h1>{team}</h1>
            <p>Season: {season}</p>
            <p>Players: {players.length}</p>
        </>
    )
}