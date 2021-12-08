import logo from './logo.svg';
import './App.css';
import ConvertCFK from './componet/ConverterCFK.js'
import TodoApp from './componet/SimpleTodo.js'
import SimplePhoto from './componet/SimplePhoto'
import Data from './componet/asset/data.json'

function App() {
  
  return (
    <div className="App">
     <ConvertCFK />
     <TodoApp />
     <SimplePhoto  data={Data} />
    </div>
  );
}

export default App;
