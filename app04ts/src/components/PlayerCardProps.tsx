
type PlayerCardProps = {
  name: string;
  number: number;
  position: string;
};

function PlayerCard({ name, number, position}: PlayerCardProps){
  return (
    <>
      <ul><li>#{number} - {name}({position})</li></ul>
    </>
  );
}

export default PlayerCard;