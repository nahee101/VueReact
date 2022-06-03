import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import LoginForm from "./pages/LoginForm";
import MyPage from "./pages/MyPage";
import Home from "./pages/Home";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      {/* ⭐ DataContext */}
      {/* 각 컴포넌트에서 DataContext에 접근해 값 사용할 수 있음 */}
      <DataProvider>
        {/* Pages */}
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* ⭐ NavBar */}
            <Route path="/loginform" element={<LoginForm />} />
            <Route path="/mypage" element={<MyPage />} />

            {/* ⭐ main */}
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </DataProvider>

    </div>
  );
}

export default App;
