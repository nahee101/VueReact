import { useState } from 'react';

import './App.css';
import { ContextEx } from './context/ContextEx'

import Page from './components/Page'
import { ThemeContext} from './context/ThemeContext'
import { UserContext } from './context/UserContext'

function App() {
  const [isDark, setIsDark] = useState(false);
  // isDark를 모든 컴포넌트에서 사용함 (Header, Content, Footer)
  // 따라서 isDark, setIsDark를 context로 만듦

  
  return (
  <div>
    <ContextEx.Provider value={'몰라,,,'}></ContextEx.Provider>

    <UserContext.Provider value={'사용자'}>
      <ThemeContext.Provider value={{isDark, setIsDark}}>
        <Page isDark={isDark} setIsDark={setIsDark}/>
      </ThemeContext.Provider>
    </UserContext.Provider>

  </div>
  )
}

export default App;
