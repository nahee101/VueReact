import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Intro from './pages/Intro'
import Profile from './pages/Profile';
import BoardList from './pages/BoardList';
import Board from './pages/Board';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import MyPage from './pages/MyPage';

function App() {
  return (
    <div className="App">
      {/* index는 상위 주소와 동일한 주소를 갖는다 */}
      <Routes>
        {/* ⭐ Outlet으로 감싸기 */}
        <Route path='/' element={<Layout />} >
          {/* 컴포넌트와 주소 연결 */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* 임의의 컴포넌트 하나를 만들어 추가해 보세요 */}
          <Route path='/intro' element={<Intro />} />
          <Route path='/profile/:username' element={<Profile /> } />

          {/* ⭐ Outlet으로 감싸기 -> 중첩 가능 */}
          {/* 중첩해서 라우터를 사용할 수 있다. outlet 컴포넌트가 반드시 필요하다 */}
          <Route path='/boardlist' element={<BoardList />}>
            <Route path=':id' element={<Board />}></Route>
          </Route>

        </Route>

        {/* *기호를 사용해서 다른 주소로 들어갔을 때 오류를 출력한다 */}
        <Route path='*' element={<NotFound />} />
        <Route path='/mypage' element={<MyPage />} />
      </Routes>
    </div>
  );
}

export default App;
