import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import ArrowComponent from './components/ArrowComponent';
import LoginComponentClass from './components/LoginComponent-class';
import LoginComponentFunction from './components/LoginComponent-function';
import StateComponent from './components/StateComponent';

/* 함수형 컴포넌트 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          내용을 수정하였습니다.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <MyComponent />
      
        <ArrowComponent name='3'>
          {/* Vue에서는 slot에 해당함 */}
          태그 사이로 전달되는 props
        </ArrowComponent>
        
        <LoginComponentClass login={true} name='잠만보'/>
        
        <LoginComponentFunction 
          login='true' 
          // 이때, 들어가는 값은 문자열이다.
          // String 외 다른 자료형을 사용하려면 { }를 사용해서 JS 형태로 넣어줘야 한다.
          // 속성의 이름을 통해서 props 값을 전달할 수 있다.
          // props으로 들어오면 속성 이름으로 사용
        />

        <StateComponent/>
      </header>
    </div>
  );
}

export default App;
