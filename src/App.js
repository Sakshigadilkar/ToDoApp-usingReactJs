import logo from './logo.svg';
import './App.css';
import Navbar from './comp/Navbar';
import Todos from './comp/Todos';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Todos></Todos>
    </div>
  );
}

export default App;
