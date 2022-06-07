import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Fetchnews from './components/Fetchnews';


function App() {
  return (
    <div className="App">
      <h1>News Application</h1>
      <Fetchnews />
      
    </div>
  );
}

export default App;
