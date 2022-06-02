import { useSearchParams } from "react-router-dom";

// 쿼리 스트링은 ?로 시작함
// 키 = 값 한 쌍으로 들어오는 값
import { useLocation } from "react-router-dom";

const Intro = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    // router v6
    const num = searchParams.get('num');
    const username = searchParams.get('username');

    return (
        <div>
            <h1>Intro</h1>
            <p>인트로 페이지입니다</p>
            <p>쿼리스트링: {location.search}</p>
            <p>useSearchParams: {num}</p>
            {/* 주소로 intro?username=hong이 들어왔을 때 */}
            {/* 아래에 환영합니다가 출력되고,
            그 외의 상황에서는 환영합니다가 출력되지 않도록 
            JSX로 작성 */}
            {/* if 문을 간단하게 쓰기 위해 ? :와 같은 삼항 연산자나 &&, || 연산자 사용
            &&: ? 대신에 &&를 사용하면 참일 때 뒤에 작성한 태그를 출력한다
            ||: ? 대신에 ||를 사용하면 거짓일 때 뒤에 작성한 태그를 출력한다
             */}
            {
                username === 'choi'
                && <h3>환영합니다!</h3>
            }
            {
                username === 'hong'
                || <h3>안녕히가세요</h3>
            }
        </div>
    );
};

export default Intro;
