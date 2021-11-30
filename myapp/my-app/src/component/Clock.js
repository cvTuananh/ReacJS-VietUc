function geTime(){
    let time = new Date()
    return time
}
function Clock (){
    return (
        <div className="AppTimeShet">
        <h1 className="Apptile">Hi I Am Clock</h1>
        <p className="Apptime">This Time:{geTime().getHours() + ':' +geTime().getMinutes() + ':' + geTime().getSeconds()}</p>
        </div>
    )
}

export default Clock