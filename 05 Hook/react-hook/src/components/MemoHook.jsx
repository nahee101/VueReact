import { useCallback, useState } from "react";
import { useMemo } from "react";

// input 태그로 숫자 값을 입력받으면 > inputnum
// li 태그에 추가된다 > number 배열
// number 배열의 합을 h3 태그로 출력한다

const MemoHook = () => {
    /* inputnum */
    const [inputnum, setInputnum] = useState(0);
    /* number */
    const [number, setNumber] = useState([10, 6]);

    /* 콜백함수 */
    const onChange = useCallback((e) => {
        console.log('onChange가 실행되고 있습니다')
        setInputnum(e.target.value);
    }, []); // 콜백함수를 사용해서 처음 렌더링할 때만 함수를 생성한다
    // 화살표 함수는 익명함수 중 하나(한 번 사용하고 버림)
    // 이벤트에서 사용되는 익명함수는 이벤트가 실행될 때마다 함수를 새로 만든다
    // 함수를 렌더하는 기준: 사용하는 값 또는 메서드가 바뀌지 않을 때 렌더할 필요가 없다

    const addNum = useCallback(() => {
        setNumber([...number, parseInt(inputnum)]);
        setInputnum(0);
    }, [inputnum, number]); // 콜백함수를 사용해서 inputnum과 number의 값이 바뀔 때에만 함수를 사용한다

    const allSum = (list) => { //useMemo를 쓰지 않아서 useState 값이 바뀔 때마다 호출됨
        /* for문을 사용해서 더하거나 */
        // for (m in list) {} -> list의 in을 사용해서 인덱스 값 반복해서 출력
        // for (n of list) {} -> list의 of를 사용해서 인덱스 값 출력

        /* reduce((previousValue, currentValue) => previousValue+currentValue)를 사용해서 더함 */
        console.log('allSum이 실행됐습니다.')
        return list.reduce((a, b) => a+b);
    };

    /* useMemo 사용 */
    const sum = useMemo(() => allSum(number), [number]);

    return (
        <div>
            <h1>Memo Hook</h1>
            <input type="number" onChange={onChange} value={inputnum}/>
            <button onClick={addNum}>추가</button>
            {/* 메소드의 리턴 값을 보여줌 */}
            <h3>합: {sum}</h3>
            <ul>
                {number.map((n, i) => (
                    <li key={i}>{n}</li>
                ))}
            </ul>
        </div>
    )
}

export default MemoHook