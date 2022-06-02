import { Link } from "react-router-dom";

const Home = () => {
    
    return (
        <div>
            <h1>Home</h1>
            <p>홈 화면입니다</p>
            {/* a 태그와 동일한 역할 */}
            {/* 하지만 a 태그로 작성할 경우 화면에 새로고침 현상이 발생한다 */}
            <Link to='/about'>About</Link> <br />
            <Link to='/intro'>Intro</Link> <br />
            <Link to='/profile/hong-gil'>프로필</Link>
        </div>
    );
};

export default Home;