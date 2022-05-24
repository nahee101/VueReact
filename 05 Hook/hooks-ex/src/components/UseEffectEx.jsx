import React, { useEffect, useState } from "react";

const UseEffectEx = () => {
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');
    
    const handleCountUpdate = () => {
        setCount(count +1);
    };

    const handleInputChange = (e) => {
        setName(e.target.value)
    };

    // count가 업데이트 될 때만 렌더링이 실시됨
    useEffect(() => {
        console.log('렌더링!');
    }, [count])

    return (
        <div>
            <hr />
            <button onClick={handleCountUpdate}>Add</button>
            <span> Count: {count}</span>
            <br />
            {/* 텍스트 추가해보기 */}
            <input type="text" value={name}
            onChange={handleInputChange}/>
            <span>Name: {name}</span>
            <hr />
        </div>
    )
};

export default UseEffectEx;