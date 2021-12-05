import React from 'react';
import PropTypes from 'prop-types';
class FormCom extends React.Component {
    constructor(props) {
        super(props);
        this.state = { txtName:'', slCar:"",slCar2:"", cbCheck:false,Toal:'' }
    }
    onSubmitHandler=(event)=>{
        event.preventDefault()
        alert(this.state.txtName + " "+ this.state.slCar +" "+this.state.slCar2 +" "+this.state.Toal +" "+ this.state.cbCheck);
    }
    onChangeHandler=(event)=>{
        let name=event.target.name
        let value=event.target.type==="checkbox"? event.target.checked: event.target.value
        this.setState({
            [name]:value}
        )
    }
    covert=(event)=>{
        let USD = 22.480
        let VND = 0.00004
        let EUR =25.814
        let toalM = 0
        let MoneyV = this.txtName

        if(this.state.slCar==='VND' && this.state.slCar2==='USD'){
                    this.toalM = this.MoneyV * USD
               return this.setSate.Toal= this.toalM
        }
        if(this.state.slCar==='VND' && this.state.slCar2==="EUR"){
            return this.state.Toal= this.state.txtName * this.EUR
     }
    }
    
    render() { 
        return (  
            <>
            <form onSubmit={this.onSubmitHandler}>     
            <h3>Nhập tiền</h3>          
                <input type="text" onChange={this.onChangeHandler} name="txtName" value={this.state.txtName}></input>    
                <select onChange={this.onChangeHandler} name="slCar" value={this.state.slCar}>
                    <option>VND</option>
                    <option>USD</option>
                    <option>EUR</option>
                 </select>      
                 <p>To</p>
                 <select onChange={this.onChangeHandler} name="slCar2" value={this.state.slCar2}>
                    <option>VND</option>
                    <option>USD</option>
                    <option>EUR</option>
                 </select>      
                 
                <input type="submit" value="Submit" onClick={this.covert}></input>
            </form>
            <p>tong tien{this.state.Toal}</p>
            </>
        );
    }
}
FormCom.protoType ={
    txtName: PropTypes.number.isRequired
}
export default FormCom;