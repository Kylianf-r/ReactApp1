import { PlayerCardProps } from '../types/types';

function PlayerCard({ name, number}: PlayerCardProps){
  return (
    <>
      <ul>{number} - {name}</ul>
    </>
  );
}

export default PlayerCard;