import { useReducer, useState } from "react";

// reducer를 이용해 {name: ''}을 만들고
// action.type
// reset: name의 값 '홍길동'
// write: name의 값 payload로 받아온 값

function reducer(state, action) {
    
    switch(action.type) {
        case 'reset':
            return {name: 'Hong gil-dong'};
        case 'write':
            // action.payload = e.target;
            return {name: action.payload};
    };
};

const ExReducerComp = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: ''
    });

    const onChange = (e) => {
        dispatch({type: 'write', payload: e.target.value})
    };

    return (
        <div>
            <h1>REDUCER Hook EX</h1>
            <input type="text" name="name" onChange={onChange} />
            <button onClick={() => dispatch({type: 'reset'})}>
                기본값
            </button>
            <hr />
            <h3>{state.name}</h3>
            <h3>{state.write}</h3>
        </div>
    )
};

export default ExReducerComp