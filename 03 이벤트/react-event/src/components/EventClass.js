/* 클래스형 컴포넌트 */
import {Component} from 'react';

/* 리액트에서 component를 상속받아 사용한다 */
class EventClass extends Component {
    // props의 값은 부모 컴포넌트로부터 받아오는 값이다
    constructor(props) {
        // 받아온 값을 super로 전달하며, 사용할 때는 this. 키워드를 쓴다
        super(props);
        // 클래스형 컴포넌트에서 사용하기 위해 constructor에 저장한다
        // state = {} 형식으로 constructor 바깥에 작성 가능하다
        this.state = {
            message: '메시지입니다'
        };
        // 클래스 안에서 사용하기 위해 this.onClickEvent 함수 이름 작성
        // 작성한 함수는 constructor 바깥에 작성되어서 연결하기 위해
        // this.onClickEvent 밖에서 작성한 이름으로 연결한다
        // 연결 시 this.setState의 this 위치를 알려주기 위하여 bind(this)로 연결한다
        this.onClickEvent = this.onClickEvent.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
    };

    // 사용할 함수의 내용: 
    // 선언적 함수 형태로 작성할 경우 constructor에서 bind 해줘야 한다
    // 화살표 형태로 작성할 경우 this가 없기 때문에 호출되는 곳의 this를 사용해야 한다(bind x)
    onClickEvent() {
        this.setState(() => ({
            message: '메시지가 바뀌었습니다'
        }));
        console.log(this.state.message);
    }
    // onChnageMessage() {} :message: '메시지입니다'로 값을 수정하는 함수를 만들고
    // onClick={}을 이용해 연결하라
    onChangeMessage() {
        this.setState(() => ({
            message: '메시지입니다'
        }));
        console.log(this.state.message);
    }

    render() {
        const {name} = this.props;
        const {message} = this.state;

        return(
            <div>
                <h1>{name}</h1>
                <h3>{message}</h3>
                {/* 메시지가 바뀌었습니다 */}
                <button
                //이벤트를 사용할 때는 케멜 형식으로
                //실행할 내용은 함수로 감싸서 실행
                onClick = {() => {
                    this.setState(() => ({
                        message: '메시지가 바뀌었습니다'
                    }));
                    console.log(message)
                }}>
                    클릭하면 메시지가 바뀝니다
                </button>
                <button
                onClick = {this.onClickEvent}> {/* this를 통해서 메소드를 들고 온다*/} 
                    클릭하면 메시지가 바뀝니다
                </button>

                {/* 메시지입니다 */}
                <button
                onClick = {this.onChangeMessage}>
                    메시지입니다
                </button>
            </div>
        )
    }
}

export default EventClass;