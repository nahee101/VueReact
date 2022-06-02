import { useState } from "react";
import { ContextEx } from "../context/ContextEx";

const ContextExInput = () => {
    const [inputText, setInputText] = useState('');

    return (
        <div>
            <input type="number" onChange={(e) => {setInputText(e.target.value)}}/>
            <button onClick={
                () => {context({type: 'text_change', payload: inputText})}
            }>텍스트 변경</button>
        </div>
    )
}

export default ContextExInput;