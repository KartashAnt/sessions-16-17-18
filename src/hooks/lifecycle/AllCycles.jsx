import React, { useEffect } from 'react';

const AllCycles = () => {
    useEffect(() => {
        console.log("Componente Montado");

        const IntevalID=setInterval(() => {
            document.title=`${new Date()}`;
            console.log("Actualizar el component");
        }, 1000);
        return () => {
            console.log("Componente va a desapareser");
            document.title="Tiempo parado";
            clearInterval(IntevalID);
        };
    }, []);
    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
