import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>Ejemplo de props.children</h1>
            <h2>Name: { props.name }</h2>
            {props.children}
        </div>
    );
}

export default Ejemplo4;
