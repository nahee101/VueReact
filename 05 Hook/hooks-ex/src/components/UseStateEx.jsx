import { useState } from "react";

const UseStateEx = () => {
    /* useState 사용 */
    // time: 변수
    // setTime: time을 업데이트할 함수
    // 초기값: 1
    const [time, setTime] = useState(1);

    const handleClick = () => {
        // 12시가 되면 그 다음 클릭에는 1시로 다시 갱신
        let newTime;
        if (time >= 12) {
            newTime = 1;
        } else {
            newTime = time +1;
        };

        setTime(newTime);
    };

    console.log('업데이트!');

    return (
        <div>
            <hr />
            <span>현재 시각: {time}시</span>
            <button onClick={handleClick}>업데이트</button>
            <hr />
        </div>
    )
}

export default UseStateEx