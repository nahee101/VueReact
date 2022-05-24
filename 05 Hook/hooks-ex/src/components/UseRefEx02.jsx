import { useState, useRef } from "react";

const UseRefEx = () => {
    /* 화면 렌더링 하기 위한 const */
    const [renderer, setRenderer] = useState(0);

    /* ref */
    const countRef = useRef(0);
    let countVar = 0;

    /* 화면 렌더링 하기 위한 함수 */
    const doRendering = () => {
        // renderer는 state이기 때문에 값이 변화하면 화면이 렌더링 됨
        setRenderer(renderer +1);
    }

    /* ref */
    const increaseRef = () => {
        countRef.current = countRef.current +1;
        console.log('ref: ', countRef.current);
    };

    const increaseVar = () => {
        countVar = countVar +1;
        console.log('var: ', countVar);

    };

    return (
        <div>
            <p>Ref: {countRef.current}</p>
            <p>Var: {countVar}</p>
            <button onClick={doRendering}>RENDER !</button>
            <button onClick={increaseRef}>Ref 증가</button>
            <button onClick={increaseVar}>Var 증가</button>
        </div>
    )
};

export default UseRefEx;