import {React,Component} from 'react'

export default class Couter extends Component{
    constructor(props){
        super(props);
        this.state = {count:10}
    }
    ClickPlus(){
        this.setState=({count:this.state.count+1})
    }
    ClickTru(){
        this.setState = ({count:this.state.count-1})
    }
    render(){
        return(
            <>
                số lần Click: {this.state.count} <br/>
                <button onClick={()=>this.ClickPlus()}>+</button>
                <button onClick={()=>this.ClickTru()}>-</button>
            </>
        )
    }
}