
function ClockCali(props){
    var city = props.city
    var offset = props.clock
    var d = new Date();
    var utc = d.getTime()+(d.getTimezoneOffset()*60000)
    var nd = new Date(utc+(3600000*offset));
    return ( 
        <div className ="Apptokyo">
            <h3>{city}</h3>
            <p>{nd.toLocaleTimeString('en-US')}</p>
        </div>
        
    )
}
export default ClockCali