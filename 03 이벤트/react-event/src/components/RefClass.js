import React, { Component } from "react";

class RefClass extends Component {
    constructor(props) {
        super(props);
        this.textInput = null;
        // ref 콜백함수를 통해 DOM에 접근
        this.setTextInputRef = (element) => {
            this.textInput = element;
        };

        // ref 콜백함수로 가져온 element(textInput)에 접근해서 값 수정
        this.focusTextInput = () => {
            // textInput의 focus() 사용
            if (this.textInput) this.textInput.focus();
            console.log(this.textInput);
            console.dir(this.textInput);
        };
    
        // React.createRef를 통해 DOM 접근
        this.myRef = React.createRef();
        this.myRefFocus = () => {
            console.log(this.myRef);
            console.dir(this.myRef);
            // current로 접근해서 사용
            if (this.myRef) this.myRef.current.focus();
        };
    };
    render() {
        return (
            <div>
                <input type='text'
                ref={this.setTextInputRef} // ref를 통해서 input element 전달
                >
                </input>
                <button
                onClick={this.focusTextInput} // 버튼을 누르면 input element에 포커스
                >
                    포커스
                </button>

                {/* createRef */}
                <input type='text'
                ref = {this.myRef} //createRef를 통해서 input element 전달
                >
                </input>
                <button
                onClick={this.myRef} //
                >
                    myRef포커스
                </button>
            </div>
        );
    };
};

export default RefClass;