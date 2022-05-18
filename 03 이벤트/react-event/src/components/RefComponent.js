/* textRefClass 컴포넌트를 들고와 현재 컴포넌트인 RefComponent에서 제어 */

import { Component } from "react";
import TextRefClass from "./TextRefClass";

class RefComponent extends Component {
    constructor(props) {
        super(props);
        this.componentRef = null;
        this.changeAll = () => {
            // 가져온 ref 값 확인
            console.log(this.componentRef);
            console.dir(this.componentRef);

            // 가져온 컴포넌트의 메소드에 접근하여 사용
            this.componentRef.changeColorText();
            this.componentRef.changeMyText();
        }
    };
    render() {
        return (
            <div>
                <TextRefClass 
                ref={(element) => {
                        this.componentRef = element
                    }}/>
                {/* ref를 사용해서 엘리먼트를 확인한다 */}
                <button
                onClick={this.changeAll}>
                    모두 바꾸기
                </button>
            </div>
        )
    }
}

export default RefComponent