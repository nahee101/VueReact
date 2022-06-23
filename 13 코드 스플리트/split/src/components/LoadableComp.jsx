import { useState } from "react";
// 설치한 라이브러리 들고 옴 ^^
import loadable from '@loadable/component';
// loadalbe을 이용해서 가져올 comp를 import 함
// 로딩 중... 호출하고 싶으면 fallback 사용
const SplitComp = loadable(() => import('./SplitComp'), 
    {fallback: <div>Loading...</div>});

const LoadableComp = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <h1>Loadable Comp를 통해 값을 가져오기</h1>
            <button onClick={() => setVisible(true)}>
                버튼을 누르면 호출합니다
            </button>
            {/* SplitComp를 호출하면 loadable을 사용해서 호출함 */}
            {visible && <SplitComp />}
        </div>
    );
};

export default LoadableComp;