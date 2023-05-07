import React, { Component,useEffect } from 'react';

export class WillUnmount extends Component {
    componentWillUnmount() { 
        console.log("Comportamiento antes de borrar el componente del DOM");
    }
    render() {
        return (
            <div>
                <h1>WillUnmount with Class</h1>
            </div>
        );
    }
}


export const WillUnmountFunctional = () => {
    useEffect(() => {
        //Cualquier evento
        return () => {
            console.log("Comportamiento antes de borrar el componente del DOM");
        };
    },[]);
    return (
        <div>
            <h1>WillUnmount with Function</h1>
        </div>
    );
}
