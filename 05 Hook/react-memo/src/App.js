import './App.css';
import React, { useState, useMemo } from 'react';

/* 어려운 계산기 */
const hardCalculate = (number) => {
  for (let i = 0; i < 999999999; i++) { } //의미없이 i를 늘려서 렌더링하는 데 시간 걸리게 함
  return number +10000;
};

/* 쉬운 계산기 */
const easyCalculate = (number) => {
  return number +1;
};

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  /* hardNumber가 변경되었을 때만 App()이 초기화되면서 */
  /* 쉬운 계산기를 작동할 때는 즉각적으로 반응이 나타난남 */
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber)
  }, [hardNumber]);

  const easySum = easyCalculate(easyNumber);

  return (  
    <div className="App">
      <h3>어려운 계산기</h3>
      <input
      type='number'
      value={hardNumber}
      onChange={(e) => setHardNumber(parseInt(e.target.value))}
      >
      </input>
      <span> +10000 = {hardSum}</span>

      <hr />
      <h3>쉬운 계산기</h3>
      <input
      type='number'
      value={easyNumber}
      onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      >
      </input>
      <span> +1 = {easySum}</span>

    </div>
  );
};

export default App;
