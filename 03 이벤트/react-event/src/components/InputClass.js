/* 클래스형 컴포넌트 */
import {Component} from 'react';

class InputClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '메시지',
            user: '유저'
        };

    this.inputChange = this.inputChange.bind(this);
    //this.showMessage = this.showMessage.bind(this)    
    };

    //input 값이 바뀔 때마다 값을 state에 넣어주는 메소드
    inputChange(e) {
        this.setState(() => ({
            [e.target.name]: e.target.value
        }));
    }
    /* 버튼을 더블클릭했을 때 message와 user 값을 alert로 출력*/

    showMessage = () => {
        alert(this.state.message + "," + this.state.user);
    }

    render() {
        const {message, user} = this.state;
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                type="text" name="message" placeholder="아무 내용이나 입력하세요"
                value={message} 
                onChange={(e) => {
                    this.setState(() => ({
                        // 객체 형태 {키: 값}
                        // 키를 [ ] 감싸면 가르키는 실제값이 사용됨
                        [e.target.name]: e.target.value
                    }));
                }}>
                </input>
                <input type="text" onChange={this.inputChange}></input>

                <h2>{message}</h2>
                <h3>{user}</h3>

                {/* 연습 */}
                <div>
                    <button onDoubleClick={this.showMessage}>더블클릭!</button>
                </div>
            </div>
        );
    }
}
export default InputClass;