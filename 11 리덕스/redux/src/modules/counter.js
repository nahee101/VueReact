/* 리덕스 사용을 위해 초기 상태와 리듀서 함수를 만들기 */

/* 액션: 액션이름 = '모듈 이름/액션 이름' 으로 구성된다 */
/* 대문자로 작성된 변수 이름의 특징: 변하지 않는 값일 때 = 상수, 
ex) 3.14... = PI
*/
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/* 액션 함수: 액션에 들어갈 값이 바뀔 때 쉽게 사용할 수 있도록 씀 */
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

/* 초기 상태 */
const initialState = {
    number: 0
};

/* 리듀서 함수, 상태 값을 변화시키는 함수 */
// 이때, state는 기본값을 정해서 넣을 수 있음
function counter(state=initialState, action) {
    switch(action.type) {
        case INCREASE:
            return {number: state.number +1}
        case DECREASE:
            return {number: state.number -1}
        default:
            return state;
        };
};

export default counter;