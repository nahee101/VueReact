import { Link } from "react-router-dom";

const Home = () => {
    
    return (
        <div>
            <h1>Home</h1>
            <p>홈 화면입니다</p>
            {/* a 태그와 동일한 역할 */}
            <Link to='/about'>About</Link> <br />
            <Link to='/expage'>연습 페이지</Link> <br />
            <Link to='/profile/hong-gil'>프로필</Link>
        </div>
    );
};

export default Home;