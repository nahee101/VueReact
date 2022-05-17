/* 클래스형 컴포넌트의 state */
import { Component } from "react";

class StateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    };
    render() {
        const {number} = this.state;
        return(
            <div>
                <h1>{number}</h1>
                {/* 버튼을 눌렀을 때 1씩 증가하는 버튼 */}
                <button 
                // 함수 형식으로 setState 내용 전달
                // prevState => ({state})와 같은 형식으로 전달한다.
                onClick = {() => {
                    this.setState((prevState) => ({
                        number: prevState.number +1
                    }));
                }}>
                    +1
                </button>
                {/* 버튼을 눌렀을 때 0으로 초기화하는 버튼 */}
                <button
                onClick = {() => {
                    this.setState(() => ({
                        number: 0
                    }));
                }}>
                    0
                </button>
                {/* 버튼을 눌렀을 때 1씩 감소하는 버튼 */}
                <button
                onClick = {() => {
                    this.setState((prevState) => ({
                        number: prevState.number -1
                    }));
                }}>
                    -1
                </button>

            </div>
        );
    };
};

export default StateComponent;