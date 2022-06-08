/* 작성한 리덕스 모듈을 하나로 묶어서 사용하기 위해 만든다 */
// redux 모듈에서 combineReducers를 가져온다
// redux와 react-redux 모두 설치해야 함 
import { combineReducers } from 'redux';

/* 작성한 리덕스 모듈을 가져옴 */
import counter from './counter';

const rooteReducer = combineReducers({
    counter
})

export default rooteReducer;