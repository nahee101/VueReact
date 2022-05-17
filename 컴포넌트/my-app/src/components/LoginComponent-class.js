/* 클래스형 컴포넌트 */
import { Component } from "react";

class LoginComponentClass extends Component {
    render() {
        const {login, name} = this.props;
        return (
            <div>
                {login === true ? (
                    <div>
                        <h1>로그인에 성공했습니다</h1>
                        <h3>{name}입니다</h3>
                    </div>
                ) : (
                    <div>
                        <h1>로그인이 필요합니다</h1>
                        <p>리액트를 시작했습니다</p>
                    </div>
                )}
            </div>
        )
    }
};
LoginComponentClass.defaultProps = {
    name: '기본 이름'
}
export default LoginComponentClass;