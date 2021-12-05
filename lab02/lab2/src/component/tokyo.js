import React from "react";
export default class RefCom extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        // this.clickMe=this.clickMe.bind(this);
    }
    clickMe=()=>{
            alert(this.txtName.value);
    }
    render() {
        return (
            <>
                <input ref={(note)=>this.txtName=note}></input>
                <button onClick={this.clickMe}>Click me</button>
            </>
        )
    }
}