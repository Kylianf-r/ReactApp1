const valeur = 0;

type bouton = {
    click: (id :number) => void
}

export default function BoutonSuppr({click}: bouton) {
    return (
        <>
        <button onClick={() => click}>Supprimer</button>
        </>
    ) 
}