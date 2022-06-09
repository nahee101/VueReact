/* 🥪 Counter comp와 redux를 CounterContainer에서 연결! */
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";

/* 호출했을 때 Counter comp가 보이도록 하는데, 
* Counter는 props 값을 받아와 화면을 출력한다
*/
const ConterContainer = ({ number, increase, decrease }) => {
    return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
};

/* stateProps 값 */
const mapStateToProps = (state) => ({
    number: state.counter.number,
});

/* dispatchProps 값 */
const mapDispatchToProps = (dispatch) => ({
    increase: () => {
        dispatch(increase()); // dispatch({type:INCREASE}) > useReduce
        console.log("+");
    },
    decrease: () => {
        dispatch(decrease());
    },
});

// store로 가져온 리덕스 모듈(리듀서함수)를 컨테이너 컴포넌트와 연결함
// connect를 통해서 store로 가져온 리덕스 모듈과
// mapStateToProps(state), mapDispatchToProps(dispatch) 를 연결해준다.
// 위와 같은 형태를 고정해서 사용.
export default connect(mapStateToProps, mapDispatchToProps)(ConterContainer);