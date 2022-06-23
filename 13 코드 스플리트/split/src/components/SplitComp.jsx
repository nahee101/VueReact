/* 코드 스플리트를 위한 세 가지 방법 */
/* 
 * 1. v16.8 훅이 생기기 전에 사용했던 방법
 * 2. v16.8 이후 추가된 방법
 * 3. 관련 모듈을 설치해서 사용하는 방법
*/

const SplitComp = () => {
    return (
        <button onClick={() => alert('Print Message')}>
            Click Me!
        </button>
    )
};

export default SplitComp;