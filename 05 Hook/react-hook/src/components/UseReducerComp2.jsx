import { useReducer, useState } from "react";

function reducer(state, action) {
    // 이전 state 값을 스프레드 연산자로 내부 내용을 꺼낸 뒤
    // action.name과 action.value를 통해 새로운 속성값을 작성한다
    // dispatch로 인해 전달된 값은 항상 action이라고 생각
    return {
        ...state,
        [action.name]: action.value
    };
};

const UseReducerComp2 = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '이름',
        nickname: '닉네임'
    });

    // 이벤트가 실행될 때 이벤트 객체를 들고 와
    // 현재 실행되는 이벤트 타겟을 dispatch로 넘겨준다
    const onChange = (e) => {
        dispatch(e.target)
    };

    return (
        <div>
            <h1>REDUCER Hook2</h1>
            <input type="text" name="name" onChange={onChange} />
            <input type="text" name="nickname" onChange={onChange} />
            <hr />
            <p>{state.name}</p>
            <p>{state.nickname}</p>
        </div>
    )
};

export default UseReducerComp2;