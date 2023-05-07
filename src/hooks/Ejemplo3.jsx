import React,{useState,useContext} from 'react';

const miContexto=React.createContext(null);
const Componente1 = () => {
    const state= useContext(miContexto);
    return (
        <div>
            <h1>El token es: { state.token }</h1>
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {
    const state=useContext(miContexto);
    return (
        <div>
            <h2>Session ID: {state.sesion}</h2>
        </div>
    );
}

export default function MiComponente() {
    const estadoInicial={
        token:"1234557",
        sesion:1
    }
    const [sessionData, setSessionData] = useState(estadoInicial);
    function actualizarSesion() {
        setSessionData({
            token:"KJFDDS1",
            sesion: sessionData.sesion+1
        })
    }
    return (
        <miContexto.Provider value={sessionData}>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar Sesion</button>
        </miContexto.Provider>
    )
}
