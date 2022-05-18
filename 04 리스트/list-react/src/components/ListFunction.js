/* 함수형 */

import { useState } from "react";
const listFunction = () => {
    // useState를 통해서 state를 작성함
    const [planet, setPlanet] = useState([
        // key 값을 위해서 id를 작성한다
        {id: 1, text: '수성'},
        {id: 2, text: '금성'},
        {id: 3, text: '지구'},
        {id: 4, text: '화성'},
        {id: 5, text: '목성'},
        {id: 6, text: '토성'},
        {id: 7, text: '천왕성'},
        {id: 8, text: '해왕성'}
    ]);

    // id 값을 받아음 -> 받아온 id를 제외한 값을 저장한다
    // = id를 삭제하는 것과 동일한 효과
    const deletePlanet = (id) => {
        const nextPlanet = planet.filter(p => p.id !== id);
        setPlanet(nextPlanet);
    };

    return (
        <div>
            <ul>
                {planet.map((p) => (
                    <li key={p.id} 
                    //함수에 값을 전달하기 위해서는 익명 함수로 감싸야 함
                    onClick={() => {deletePlanet(p.id)}}>
                        {p.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default listFunction;