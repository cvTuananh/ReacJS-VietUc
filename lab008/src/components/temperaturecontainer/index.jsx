import { Component } from "react";
import Temperature from "../temperature";

export default class TemperatureContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			temperature: "0",
			type: "c",
		};
	}
	handle_c_change = (temperatureValue) => {
		this.setState({
			temperature: temperatureValue,
			type: "c",
		});
	};
	handle_f_change = (temperatureValue) => {
		this.setState({
			temperature: temperatureValue,
			type: "f",
		});
	};
	convertCtoF = (value) => ((value - 32) * 5) / 9;
	convertFtoC = (value) => (value * 9) / 5 + 32;
	render() {
		const type = this.state.type;
		const temperatureValue = this.state.temperature;
		const c_value =
			type === "c" ? temperatureValue : this.convertCtoF(temperatureValue);
		const f_value =
			type === "f" ? temperatureValue : this.convertFtoC(temperatureValue);
		return (
			<>
				<div>
					<h1>Convert temperature to F</h1>
					<div>
						<Temperature
							type="c"
                            value={c_value}
							onTempertureChange={this.handle_c_change}
						/>
						<Temperature
							type="f"
                            value={f_value}
							onTempertureChange={this.handle_f_change}
						/>
					</div>
				</div>
			</>
		);
	}
}
