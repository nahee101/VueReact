import { Component } from "react";

class ClassComp extends Component {
    // comp를 담아올 state를 만든다
    state = {
        SplitComp: null
    };

    handleClick = () => {
        // import를 통해 comp를 받아오고
        // import를 통해 받아온 comp는 promise로 들고 오기 때문에 then으로 처리함
        import('./SplitComp').then(({default: SplitComp}) => {
            this.setState({SplitComp})
        });
    };
    
    render() {
        const { SplitComp } = this.state;
        return (
            <div>
                <button onClick={this.handleClick}>클래스 !</button>
                {/* SplitComp 값이 들어가 있다면 값을 출력될 수 있음 */}
                {SplitComp && <SplitComp />}
            </div>
        );
    };
};

export default ClassComp;