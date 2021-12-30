import logo from "./logo.svg";
import "./App.css";
import Profile from "./component/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import Simple from "./component/SimpleLanding.js";
import Countdown from "./component/Coutdown.js"


function App() {
	return (
		<div className="App">
      <Countdown 
		timeTillDate="05 26 2019, 6:00 am" 
		timeFormat="MM DD YYYY, h:mm a" 
	/>
			<Profile />
			<Simple />
		</div>
	);
}

export default App;
