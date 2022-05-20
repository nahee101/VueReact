import { useReducer } from "react";

// useReducer를 사용하기 위해 초기화하는 변수
// useReducer에 {count: 0}을 바로 작성해도 상관 없음
const initialState = {count: 0};

// reducer라는 함수를 만들어서 useReducer에서 사용한다
// useState는 set 함수를 수정할 수 없다
// useReducer는 원하는 함수를 수정하여 사용할 수 있다
function reducer(state, action) {
    // action.type에 따라서 실행될 내용을 분류한다
    switch (action.type) {
        case 'increment':
            // return을 이용해서 case의 실행 내용을 종료하거나 값을 수정한다
            return {count: state.count +1};
        case 'decrement':
            return {count: state.count -1};
        case 'reset':
            return {count: action.payload};
        default:
            throw new Error();
    };
};

const UseReducerComp = () => {
    // useState와 동일하게 [값, 함수] 반환값을 받아올 수 있다
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <div>
            <h1>REDUCER Hook</h1>
            {/* initialState 값이 객체이므로 객체의 속성에 접근해서 사용한다 */}
            <p>Count: {state.count}</p>
            {/* dispatch를 사용해 줄 때 사용할 action.type을 객체 형식으로 넣어서 사용한다 */}
            <button onClick={() => dispatch({type: 'decrement'})}>
                -
            </button>

            <button onClick={() => dispatch({type: 'increment'})}>
                +
            </button>
            
            <button onClick={() => dispatch({type: 'reset', payload: 0})}>
                reset
            </button>
            <button onClick={() => dispatch({type: ''})}>
                no
            </button>
        </div>
    )
};

export default UseReducerComp;