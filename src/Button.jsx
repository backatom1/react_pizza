import React, { Component } from 'react';

export default class Button extends Component {

	render() {
		console.log(this.props);
		return (
			<button>Привет</button>
		);
	}
}