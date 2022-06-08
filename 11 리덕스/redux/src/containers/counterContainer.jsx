import { connect } from 'react-redux';
import Couter from '../components/Counter'
import { increase, decrease } from '../modules/counter';

const counterContainer = ({number, increase, decrease}) => {
    return (
        <Couter 
        number={number} 
        onIncrease={increase} 
        onDecrease={decrease} />
    );
};

const mapStateToProps = state => ({
    number: state.couter.number
});

const mapDispatchToProps = dispatch => ({
    increase: () => {
        dispatch(increase());
        console.log('+');
    },
    decrease: () => {
        dispatch(decrease());
        console.log('-');
    }
})

/* store로 가져온 리덕스 모듈(리듀서 함수)을
컨테이터 컴포넌트와 연결한다*/
export default connect()(counterContainer);