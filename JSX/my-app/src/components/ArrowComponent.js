import {PropTypes} from 'prop-types';
/* 화살표 함수로 만드는 컴포넌트 */
// 모듈로 내보내기 위해 ArrowComponent에 담는다.

const ArrowComponent = (props) => {
    // 비구조화 할당 문법을 통해 props의 내부 값을 추출해서 사용한다.
    const {name, children} = props;
    return( 
    /* props.children을 통해서 Vue의 slot 같이 값을 사용할 수 있다. */
        <div>
            <p>{children}</p>
            <p>{name}</p>
            화살표 함수로 만든 컴포넌트입니다
        </div>)
};

//App.js에서 값을 작성해주지 않으면 아래 값이 출력된다.
ArrowComponent.defaultProps = {
    name: '기본 이름'
};

//변수 타입 검사
ArrowComponent.propTypes = {
    name: PropTypes.string
};

export default ArrowComponent;