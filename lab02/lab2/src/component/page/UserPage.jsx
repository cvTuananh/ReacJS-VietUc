import React from "react";
import User from './User'
import Greenting from "./Greeting";

export default class  UserPage extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state={islogin:false}
    }
    LogoutButtonClick =() => {
        this.setState({islogin:false})
    }
    logointButtonClick =() => {
        this.setState({islogin:true})
    }
    render() {
        let button
        if (this.state.islogin) button=<LogoutButton onClick={this.LogoutButtonClick} />
        else button=<LogintButton onClick={this.logointButtonClick} />
        return (
            <>
                {/* <User />
                <Greenting islogin = {true} /> */}
                <Greenting islogin = {this.state.islogin} /> {button}
                
                
            </>
        )
    }
}
let LogoutButton =(props) => {
    return <button onClick={props.onClick}>Login</button>
}
let LogintButton =(props) => {
    return <button onClick={props.onClick}>Login</button>
}

