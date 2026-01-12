import React from 'react';
import logo from './logo.svg';
import './App.css';
import psg from './data/data';

// const psg = {
        
//       };

type PlayerCardProps = {
  name: string;
  number: number;
  position: string;
};

function PlayerCard({ name, number, position}: PlayerCardProps){
  return (
    <div>
      <h3>{name}</h3>
      <p>#{number} - {position}</p>
    </div>
  );
}

export default function App() {
    const { team, players } = psg;

  return (
    <>
      {/*aaaaaaaaaaaaaaaaaaaaaaaa*/}      
      <h1>
         Exercice 6.2
      </h1>
      <h1>{team}</h1>
      <p>Nombre de joueurs : {players.length}</p>
      <h2>Liste des joueurs de l'équipe : </h2>
      {players.map((players) => (
        <PlayerCard
          key={players.number}
          name={players.name}
          number={players.number}
          position={players.position}
        ></PlayerCard>
      ))}
    </>
  );
}


