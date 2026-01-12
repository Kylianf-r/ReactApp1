import './App.css';
import psg from './data/data';

type PlayerCardProps = {
  name: string;
  number: number;
  position: string;
};


export default function Quete5()  {
    const { team, players } = psg;

    return (
        <>
            <h1>
                Quête 5 et Bonus : Player List : Player Card
            </h1>
            <h1>{team}</h1>
            <p>Nombre de joueurs : {players.length}</p>
        </>
    )
}
