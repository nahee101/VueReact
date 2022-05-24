import { useRef, useEffect } from "react";

const UseRefDOMEx = () => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const login = () => {
        alert(`환영합니다 ${inputRef.current.value}!`);
        inputRef.current.focus();
    }
    return (
        <div>
            <input ref={inputRef} type="text" placeholder="user name"/>
            <button onClick={login}>로그인</button>
        </div>
    )
};

export default UseRefDOMEx