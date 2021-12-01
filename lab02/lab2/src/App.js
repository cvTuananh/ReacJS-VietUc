
import './App.css';
import Cali from './component/cali.js'
import India from './component/india.js'
import Newyork from './component/newyork.js'
import China from './component/china.js'
import Tokyo from './component/tokyo.js'
import Convert from './component/covert.js'

function App() {
  return (
    <div className="App">
        <Cali city="California" clock={-8} />
        <India city='India' clock={+5.5} />
        <Newyork York city='New York' clock={-5} />
        <China city="China" clock={+8} />
        <Tokyo city='Tokyo' clock={+9}/>
        <Convert />

    </div>
  );
}

export default App;
