import logo from './logo.svg';
import './App.css';

let topic = "Stop Cyberbullying";
let element = <section>
  <h1>Spread Kindness Online</h1>
  <p>Creating a safer digital world</p>
</section>

function App() {
  return  <div className="app-container">
    <h1 className="main-heading">Cybersecurity Awareness</h1>
    <h2 className="sub-heading">Let's {topic}</h2>
    <h3 className="sub-sub-heading">Together Against Cyberbullying</h3>
    {element}
    <button>Join the Campaign</button>
  </div>;
}

export default App;
