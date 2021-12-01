import React from "react";
export default class RefCom extends React.Component {
    constructor(props) {
        super(props);
        var EUR = 25.732;
        var VND = 0.000044;
        var USD = 22.715;
        var toal = 0;
        var money = 0;

        this.start=React.createRef();
        this.end = React.createRef();
    }
    convert(){
            
        if(this.start === "USD" && this.end === "EUR"){
            this.toal = this.money * this.EUR;
        }
        if(this.start === "USD" && this.end === "VND"){
            this.toal = this.money * this.EUR;
        }
        if(this.start === "USD" && this.end === "EUR"){
            this.toal = this.money * this.EUR;
        }
    }
    render() {
        return (
            <>
                <p>nhan so tien</p>
                <input type="number" ref={this.money}></input>
                <select ref={this.start}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="VND">VND</option>
                </select>
                <select ref={this.end}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="VND">VND</option>
                </select>
                <button onClick={()=>this.convert()}>chuyển</button>
                <p>Quy ra là</p>
                <p>{this.toal}</p>
            </>
        )
    }
}