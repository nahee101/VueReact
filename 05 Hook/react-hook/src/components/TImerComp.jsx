import { useState, useEffect } from "react";

const TimerFunction = () => {
    /* 타이머 */
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    };

    // 두 번째 인수를 작성하지 않으면 업데이트와 마운트가 함께 발생한다
    // 두 번째 인수로는 [] 내에 업데이트할 변수 이름을 작성한다
    // []를 빈 값으로 두면 처음 마운트할 때
    useEffect(() => {
        setInterval(() => tick(), 1000);
    }, []);

    return (
        <div>
            <h1>{date.toLocaleTimeString()}</h1>
        </div>
    )
};

export default TimerFunction;