import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {
	constructor(props){
		super(props);
		this.state={
			age: 20
		}
	}
	render() {
		return (
			<div>
				<h1>
					HOLA {this.props.name}
				</h1>
				<h2>
					Tu edad: {this.state.age}
				</h2>
				<div>
					<button onClick={this.Bday}>
						Cumpilr años
					</button>
				</div>
			</div>
		);
	}
	Bday=()=>{
		this.setState((prevState)=>{
			return {
				age: prevState.age+1
			}
		})
	}
}


Greeting.propTypes = {
	name:PropTypes.string
};


export default Greeting;
