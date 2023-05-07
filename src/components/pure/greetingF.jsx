import React, {useState} from 'react';
import PropTypes from 'prop-types';

const GreetingF = (props) => {
    const [age,setage]=useState(20);
    const bday=()=>{
        setage(age+1);
    }
    return (
        <div>
            <h1>
				HOLA {props.name}
			</h1>
			<h2>
				Tu edad: {age}
			</h2>
			<div>
                <button onClick={bday}>
					Cumpilr años
				</button>
			</div>
        </div>
    );
};


GreetingF.propTypes = {
    name:PropTypes.string
};


export default GreetingF;
