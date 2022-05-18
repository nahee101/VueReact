/* TextRefClass에서 ref 콜백과 create.ref를 사용하여 클릭했을 때
input의 style의 backgroundColor 값을 red로 바꾸세요 */

import React, { Component, createRef } from "react";

class TextRefClass extends React.Component {
    constructor(props) {
        super(props);

        this.myText = null;
        this.myTextRef = (element) => {
            this.myText = element;
        };
        this.changeMyText = () => {
            if (this.myText) this.myText.style.backgroundColor = 'red';
        };

        this.colorText = React.createRef();
        this.changeColorText = () => {
            if (this.colorText) this.colorText.current.style.backgroundColor = 'red';
        }
    };
    render() {

        return (
            /* ref */
            <div>
                <div>
                    <input type='text'
                    ref = {this.myTextRef}>
                    </input>
                    <button
                    onClick={this.changeMyText}>
                        배경색상을 바꿉니다.
                    </button>
                </div>

                <div>
                    <input type='text'
                    ref={this.colorText}>
                    </input>
                    <button
                    onClick={this.changeColorText}>
                        배경색상을 바꿉니다.
                    </button>
                </div>
            </div>
            
        )
    };
};

export default TextRefClass