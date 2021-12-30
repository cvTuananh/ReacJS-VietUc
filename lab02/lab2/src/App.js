
import './App.css';
import Cali from './component/cali.js'
import Tokyo from './component/tokyo.js'
import Convert from './component/covert.js'
import Page from './component/page/UserPage.jsx'

function App() {
  return (
    <div className="App">
        <Cali city="California" clock={-8} />
        <Cali city='India' clock={+5.5} />
        <Cali city='New York' clock={-5} />
        <Cali city="China" clock={+8} />
        <Tokyo/>
        <Convert />
        <Page />

    </div>
  );
}

export default App;
