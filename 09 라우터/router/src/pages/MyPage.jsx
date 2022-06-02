import { Navigate } from "react-router-dom";

const MyPage = () => {
    const isLogin = false;

    if(!isLogin) {
        return (
            /* Navigate를 이용해서 다른 컴포넌트로 이동한다 */
            /* redirect */
            <Navigate to='/' replace={true}></Navigate>
        );
    };

    return (
        <div>
            <h1>My Page</h1>
        </div>
    );
};

export default MyPage;