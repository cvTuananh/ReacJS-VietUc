import { Component } from "react";

export default class Button extends Component {
	constructor(props) {
		super(props);
		this.state = { isButtonStatus: true,value:100 };
        this.handleClick = this.handleClick.bind(this);
        this.btnGetValue = this.btnGetValue.bind(this);
	}
    handleClick() {
        this.setState(state =>({ isButtonStatus:!state.isButtonStatus }));
    }
    btnGetValue(){
        let value = this.state.value +100
        this.setState({value:value})
    }
	render() {
		return (
			<>
				<button onClick={this.handleClick}>Click ME</button>
				<span>Status of Button :{this.state.isButtonStatus ? 'true':'false'}</span>

                <button onClick={this.btnGetValue}>Get value</button>
                <span>Value of Button :{this.state.value}</span>
			</>
		);
	}
}
