import { Component } from "react";
import './style.css'
import User from '../User/index'
class Clock extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
		this.state = { date: new Date()};
	}
    componentDidMount() {
        this.timeID= setInterval(
            ()=> this.timer_tick(), 1000
        )
    }
    componentWillUnmount() {
        clearInterval(this.timeID)
    }
    timer_tick(){
        this.setState({ date: new Date()})
    }
    render() {
        return (
            <>
                <div className= "Clock" >
                   <User name={this.props.name} /> at <span>{this.state.date.toLocaleTimeString()}</span>
                </div>
            </>
        )
    }
}

export default Clock;
