/* 화살표 함수 */
const LoginComponentFunction = (props) => {
    const user = '홍길동';
    return props.login ? (
        <div>
            <h1>로그인에 성공했습니다</h1>
            <h3>{user}입니다</h3>
            <p>{props.login}</p>
        </div>
            ) : (
                <div>
                    <h1>로그인이 필요합니다</h1>
                    <p>리액트를 시작했습니다</p>
                </div>
            )
};

export default LoginComponentFunction;