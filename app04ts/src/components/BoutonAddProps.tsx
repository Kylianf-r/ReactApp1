import './BoutonCSS.css';

const valeur = 0;

type bouton = {
    click: () => void
}

export default function BoutonAdd({click}: bouton) {
    return (
        <>
        <button className="bouton-modern" onClick={click}>+1</button>
        </>
    ) 
}

