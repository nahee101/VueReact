import { useState, useEffect } from "react";
import UseEffectTimer from "./UseEffectTimer";

const UseEffectTimerShow = () => {
    const [showTimer, setShowTimer] = useState(false);

    return (
        <div>
            <hr />
            {showTimer && <UseEffectTimer />}
            <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
            <hr />
        </div>
    )
};

export default UseEffectTimerShow;