import React, { Component,useEffect } from 'react';

export class DidUpdate extends Component {
    componentDidUpdate() { 
        console.log("Comportamiento antes de actualizar el componente en DOM");
    }
    render() {
        return (
            <div>
                <h1>DidUpdate with Class</h1>
            </div>
        );
    }
}


export const DidUpdateFunctional = () => {
    useEffect(() => {
        console.log("Comportamiento antes de actualizar el componente en DOM");
    });
    return (
        <div>
            <h1>DidUpdate with Function</h1>
        </div>
    );
}
