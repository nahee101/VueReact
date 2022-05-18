import './App.css';
import EventClass from './components/EventClass'
import InputClass from './components/InputClass';
import InputArrow from './components/InputArrow';
import RefClass from './components/RefClass';
import TextRefClass from './components/TextRefClass';
import RefComponent from './components/RefComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EventClass name='이벤트' />
        <InputClass />
        <InputArrow />
        <RefClass />
        <TextRefClass />
        <RefComponent />
      </header>
    </div>
  );
}

export default App;
