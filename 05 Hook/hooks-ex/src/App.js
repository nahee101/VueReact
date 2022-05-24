import './App.css';
/* 컴포넌트 */
//import UseStateEx from './components/UseStateEx';
//import UseStateEx02 from './components/UseStateEx02';
import UseEffectEx from './components/UseEffectEx';
import UseEffectTimerShow from './components/UseEffectTimerShow';

function App() {
  return (
    <div className="App">

      <h1>UseEffect</h1>
      <UseEffectEx />
      <h3>UseEffect 활용 타이머</h3>
      <UseEffectTimerShow />
    </div>
  );
}

export default App;
