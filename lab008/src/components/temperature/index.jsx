import { Component } from "react";

export default class temperature extends Component {
	constructor(props) {
		super(props);
	}
	handleInputChange = (e) => {
		this.props.onTempertureChange(e.target.value);
	};

	render() {
		const temperature = this.props.value;
		const type = this.props.type;
		return (
			<>
				<fieldset>
					<legend>Enter temperature in {type}</legend>
					<input
						value={temperature}
						onChange={this.handleInputChange}
					/>
				</fieldset>
				;
			</>
		);
	}
}
