/* 클래스형 컴포넌트 */
import { Component } from "react";

// react에서 받아온 Component를 myComponent에 상속
class myComponent extends Component {
    // 클래스형 컴포넌트에서는 return 대신 render를 통해 내보낸다
    render() {
        const name = 'react';
        return (
            <div>
                <h1>{name} 첫 컴포넌트입니다</h1>
            </div>
        )
    }
}
export default myComponent;