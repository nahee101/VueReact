import { useState } from "react";
import ClassComp from "./components/ClassComp";
import FuncComp from "./components/FuncComp";
import LoadableComp from "./components/LoadableComp";
import SplitComp from "./components/SplitComp";

function App() {
  const [comp, setComp] = useState('')
  /* 1. 훅 생기기 이전 */
  // 클릭했을 때 import해서 들고 옴
  const onClick = () => {
    // import해서 들고 온 값은 promise로 들어옴 - then으로 받아줌
    import("./components/SplitComp").then(({default: SplitComp}) => {
      // 들고 온 값을 state에 넣어 저장
      setComp({ SplitComp });
    });
  };

  return (
    <div className="App">
      <div>
        <button onClick={onClick}> 클릭하면 컴포넌트 들고 옴 </button>
        {/* 작성했던 comp를 들고 오는 방법 */}
        { comp && <SplitComp /> }
        <hr />
      </div>

      <div>
        <ClassComp />
        <hr />
        <FuncComp />
        <hr />
        <LoadableComp />
      </div>
    </div>
  );
}

export default App;
