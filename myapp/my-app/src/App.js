
import './App.css';
import TimeLine from './component/Clock.js';
import Profile from './component/ProFile.js';
import Clarder from './component/Calendar';
import Count from './component/CountClick'
import "react-datetime/css/react-datetime.css";
function App() {
  return (
    <div className="App">
      <Profile />
      <br/>
      <TimeLine />
      <Clarder />
    </div>
  );
}

export default App;
