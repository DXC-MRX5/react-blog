import './App.css';
import Header from './Components/Header';
import Routing from './Components/Routing';
import CntxtAPI from './ContextApi/CntxtAPI';

function App() {
  return (
    <div className="App">
    <CntxtAPI>
      <Header/>
      <Routing/>
    </CntxtAPI>
    </div>
  );
}

export default App;
