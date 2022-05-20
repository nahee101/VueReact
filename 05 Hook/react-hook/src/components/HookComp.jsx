/* Hook */
import { useState, useEffect } from "react";

const HookComp = () => {
    /* 버튼 count와 username */
    // 변수: count / 값 수정: setCount
    // useState는 stateHook으로 사용된다
    const [count, setCount] = useState(0);
    // stateHook은 여러 개를 작성할 수 있다
    const [username, setUsername] = useState('김보라');


    //componentDidMount, componentDidUpdate, componentWillUnmount와 동일하게 사용
    useEffect(() => {
        //componentDidMount, componentDidUpdate와 동일하게 작동
        document.title = count;
        console.log(count);

    }, []);


    return (
        <div>
            <div>
                <h1>StateHook</h1>
                <h3>{username}</h3>
                <p>{count}</p>
                <button onClick={() => setCount(count +1)}>
                    Click Me
                </button>
            </div>
        </div>
    );
};

export default HookComp;