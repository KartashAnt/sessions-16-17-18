import React, { Component,useEffect } from 'react';

export class DidMount extends Component {
    componentDidMount() { 
        console.log("Comportamiento antes de introducirse en DOM");
    }
    render() {
        return (
            <div>
                <h1>DidMount with Class</h1>
            </div>
        );
    }
}


export const DidMountFunctional = () => {
    useEffect(() => {
        console.log("Comportamiento antes de introducirse en DOM");
    }, []);
    return (
        <div>
            <h1>DidMount with Function</h1>
        </div>
    );
}

