import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Intro from './pages/Intro'
import Profile from './pages/Profile';
import BoardList from './pages/BoardList';
import Board from './pages/Board';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* 컴포넌트와 주소 연결 */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* 임의의 컴포넌트 하나를 만들어 추가해 보세요 */}
        <Route path='/intro' element={<Intro />} />
        <Route path='/profile/:username' element={<Profile /> } />
        {/* 중첩해서 라우터를 사용할 수 있다. outlet 컴포넌트가 반드시 필요하다 */}
        <Route path='/boardlist' element={<BoardList />}>
          <Route path=':id' element={<Board />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
