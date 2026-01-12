
type PlayerCardProps = {
  name: string;
  number: number;
  position: string;
  title: string;
};

function PlayerCardTitle({ name, number, position, title}: PlayerCardProps){
  return (
    <>
      <ul><li>#{number} - {name}({position}) {title}</li></ul>
    </>
  );
}

export default PlayerCardTitle;