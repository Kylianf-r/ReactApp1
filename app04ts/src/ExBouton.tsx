import { useState } from 'react';
import BoutonAdd from './components/BoutonAddProps';

export default function ExBouton()  {
    
    const [valeur, SetValeur] = useState(0)
    const AddValeur = () => {
        SetValeur(prev => prev + 1)
    }
    return (
        <>
            <h1>
                Bouton +1
            </h1>
            <p>Compteur : {valeur}</p>
            <BoutonAdd click={AddValeur}></BoutonAdd>
        </>
    )
}
