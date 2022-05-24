import { useEffect } from "react";

const UseEffectTimer = (props) => {
    
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머 돌아가는 중...');
        }, 1000)

        return () => {
            clearInterval(timer);
            console.log('타이머가 종료되었습니다.')
        }
    }, []);

    return (
        <div>
            <span> 타이머가 작동합니다. 콘솔 확인하세요</span>
        </div>
    )
};

export default UseEffectTimer;