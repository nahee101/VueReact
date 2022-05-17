/* 함수형 컴포넌트에서 state 값 사용 방법 */
import {useState} from 'react';

const ArrowState = (props) => {
    // useState()의 반환값이 [값, 값을 수정하는 메소드]
    // number의 값은 useState(0) 안에 할당한 값
    // 비구조화를 통해 할당
    // setNumber 메소드는 setState와 동일한 역할
    const [number, setNumber] = useState(0);
    const [name, setName] = useState('홍길동')
    return(
        <div>
            <div>
                <h1>{number}</h1>
                <button
                onClick = {() => {
                    setNumber(number+1);
                }}>
                    +1
                </button>
            </div>
            
            <div>
                <h1>{name}</h1>
                <button
                onClick = {() => {
                    setName('성춘향')
                    }
                }>
                    클릭하면 이름이 바뀝니다
                </button>
            </div>
        </div>
    )
}

export default ArrowState;