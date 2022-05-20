import './App.css';
import ExReducerComp from './components/ExReducerComp';
import HookComp from './components/HookComp';
import TimerFunction from './components/TImerComp';
import UseReducerComp from './components/UseReducerComp';
import UseReducerComp2 from './components/UseReducerComp2';

function App() {
  return (
    <div className="App">
      <HookComp />
      <TimerFunction />
      <UseReducerComp />
      <UseReducerComp2 />
      <ExReducerComp />
    </div>
  );
}

export default App;
