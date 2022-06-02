import { Outlet, useNavigate } from "react-router-dom";
// $rotuer.push()

const Layout = () => {
    /* ⭐ useNavigate를 사용하여 원하는 주소로 이동할 수 있다 */
    const navigate = useNavigate();
    const goBack = () => {
        /* 이전 페이지로 이동 */
        navigate(-1);
    };

    const goAbout = () => {
        /* 이동할 때 현재 페이지에 대한 기록을 남기지 않는다 */
        /* about의 기록은 남지만~ 현재 있었던 페이지에 대한 기록은 남지 않음 */
        navigate('/about', {replace: true});
    };

    const goBoard = () => {
        navigate('/boardlist', {replace: true});
    };

    const goMyPage = () => {
        navigate('/mypage', {replace: true});
    }

    return (
        <div>
            <header style={{background: 'lightgray', padding: 16}}>
                <h1>Header</h1>
                <button onClick={goBack}>뒤로 가기</button>    
                <button onClick={goAbout}>About으로 가기</button>    
                <button onClick={goBoard}>BoardList으로 가기</button>    
                <button onClick={goMyPage}>My Page로 가기</button>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer><p>Footer</p></footer>
        </div>
    );
};

export default Layout;