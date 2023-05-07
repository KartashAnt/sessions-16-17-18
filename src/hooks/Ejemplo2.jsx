import React,{useEffect,useRef,useState} from 'react';

const Ejemplo2 = () => {

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    const myRef = useRef();

    function aumentarContador1(param) { 
        setContador1(contador1+1);
    }
    function aumentarContador2(param) { 
        setContador2(contador2+1);
    }

    /*useEffect(() => {
        console.log("Cambio en estado de elemento");
        console.log(myRef);
    });*/

    useEffect(() => {
        console.log("Cambio en estado de elemento");
        console.log(myRef);
    },[contador1]);
    return (
        <div>
            <h1>Ejemplo de useState,useRef y useEffect</h1>
            <h2>Contador 1: { contador1 }</h2>
            <h2>Contador 2: { contador2 }</h2>
            <h3 ref={myRef}> Ejemplo de ref</h3>
            <div>
                <button onClick={aumentarContador1}>Aumentar Contador 1</button>
                <button onClick={aumentarContador2}>Aumentar Contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
