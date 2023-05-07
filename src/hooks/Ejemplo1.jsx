/** Ejemplo de hook useState */
import React, {useState} from 'react';

const Ejemplo1 = () => {
    const valorInicial=0;
    
    const personaInicial={
        name:"Anton",
        email:"tohakartasov@gmail.com"
    }

    const [contador,setContador]=useState(valorInicial);

    const [persona, setPersona] = useState(personaInicial);

    function aumentarContador() { 
        setContador(contador+1);
    }

    function actualizarPersona() {
        setPersona(
            {
                name:"Pepe",
                email:"email_falso@gmail.com"
            }
        )
    }

    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h2>Name: { persona.name }</h2>
            <h3>Email: { persona.email }</h3>
            <h4>Contador: { contador }</h4>
            <div>
                <button onClick={aumentarContador}>Aumentar Controlador</button>
                <button onClick={actualizarPersona}>Actualizar Persona</button>
            </div>
        </div>
    );
}

export default Ejemplo1;
