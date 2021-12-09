import logo from './logo.svg';
import './App.css';
import Profile from './component/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Simple from './component/SimpleLanding.js';

function App() {
  return (
    <div className="App">
      <Profile />
      <Simple/>
    </div>

  );
}

export default App;
