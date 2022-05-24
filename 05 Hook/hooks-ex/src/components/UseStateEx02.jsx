import { useState } from "react";

// 무거운 작업(ex 계산)을 초기값으로 불러올 때 렌더링에 문제가 생길 수 있음
const heavyWork = () => {
    console.log('엄청나게 무거운 작업');
    return ['홍길동', '김민수']
};

const UseStateEx02 = () => {
    // 기존에 갖고 있던 초기 값(이름 목록)
    const [names, setNames] = useState(() => {
        return heavyWork();
    });
    // input에 추가로 입력한 이름
    const [input, setInput] = useState('');
    // onChange에서 실행되는 함수
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
    // onClick에서 실행되는 함수
    const handleUpload = () => {
        // 콜백함수 전달(앞서 입력한 값과 밀접하게 관련 있음)
        setNames((prevState) => {
            console.log('이전 state:', prevState);
            return ([input, ...prevState]);
        });
    };

    return (
        <div>
            <hr />
            <input type="text" value={input} 
            onChange={handleInputChange}/>
            <button
            onClick={handleUpload}>이름 추가</button>
            {names.map((name, idx) => {
                return <p key={idx}>{name}</p>
            })}
            <hr />
        </div>
    )
};

export default UseStateEx02;