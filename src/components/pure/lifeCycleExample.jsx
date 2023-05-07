import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifeCycleExample extends Component {

    constructor(props) {
        super(props);
        console.log("Constructor");
    }
    
    componentDidMount() { 
        console.log("Componente acaba de montarse");
    }

    shouldComponentUpdate(nextProps, nextState) { 
        // Permite permitir la actualización de componente
    }

    componentDidUpdate(prevProps, prevState) { 
        console.log("Componente acaba de actualizarse");
    } 

    componentWillUnmount() {
        console.log("Componene va a desmontarse");
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}


LifeCycleExample.propTypes = {

};


export default LifeCycleExample;
