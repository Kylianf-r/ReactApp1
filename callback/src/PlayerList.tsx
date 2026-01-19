import './App.css';
import psgData from './data/data';
import PlayerCard from './components/PlayerCardProps';
import BoutonSuppr from './components/BoutonSupprProps';
import { Player } from './types/types';
import { useState } from 'react';


export default function PlayerList()  {

    const [players, setPlayers] = useState(psgData.players);
    const { team, season } = psgData;

    const supprimerJoueur = (id: number) => {
        setPlayers(players.filter(player => player.id !== id));
    };

    return (
        <>
            {players.map((players) => (
                <div>
                <PlayerCard
                key={players.number}
                name={players.name}
                number={players.number}
                ></PlayerCard>
                <BoutonSuppr click={() => supprimerJoueur(players.id)} />
                </div>
            ))}
        </>
    )
}