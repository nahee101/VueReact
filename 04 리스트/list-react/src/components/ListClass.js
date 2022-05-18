import {Component} from 'react';

/* map list */
class ListClass extends Component {
    constructor(props) {
        super(props);
        // 값을 배열로 받아옴
        this.seasons = ['봄', '여름', '가을', '겨울'];
        // map을 통해서 동일한 컴포넌트나 엘리먼트에 넣음 -> 새로운 배열로 저장
        this.listItems = this.seasons.map(
            (season, index) => <li key={index}>{season}</li>
            );

        // state의 값을 비구조화할당
        // 배열 값을 사용할 때는 key로 쓸 수 있는 id 값을 추가한다
        this.state = {
            planets: [
                {id: 1, text: '수성'},
                {id: 2, text: '금성'},
                {id: 3, text: '지구'},
                {id: 4, text: '화성'},
                {id: 5, text: '목성'},
                {id: 6, text: '토성'},
                {id: 7, text: '천왕성'},
                {id: 8, text: '해왕성'}
            ],
            /* 받아올 값 */
            inputText: {text: '', id: '',},
            /* 학생 목록을 table 태그로 출력 */
            students: [
                {id: 1, name: '원더우먼'},
                {id: 2, name: '배트맨'},
                {id: 3, name: '슈퍼맨'}
            ]
        };
    };

        /*deletePlanet = (id) => {
        const nextPlanet = this.state.planets.filter(p => p.id !== id);
            // 클래스형에서는 setState를 통해서 값을 수정한다
            this.setState({planets: nextPlanet})
        };*/

    // 바뀐 값을 가져오는 함수
    changeText = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    // 배열에 값을 넣는 함수
    getText = () => {
        //this.state.planets.push(this.state.inputText);
        // this.setState({planets: nextPlanet});
        const nextPlanet = this.state.planets.concat({
            id:this.state.inputId, 
            text:this.state.inputText
        });
        this.setState({inputId: this.state.inputId +1});
        this.setState({planets: nextPlanet});
    };

    render() {
        const {planets} = this.state;
        const {students} = this.state;
        // const listPlanet = planets.map(p => <li key={p.id}>{p.text}</li>);

        return(
            <div>
                {/* 사계 */}
                <div>
                    <ul>{this.listItems}</ul>
                </div>

                {/* 행성 */}
                <div>
                    <input type='text' name='inputText'
                    onChange={this.changeText}>
                    </input>
                    <button onClick={this.getText}>
                        추가
                    </button>

                    <ul>
                        {planets.map((p) => (
                        <li key={p.id} 
                        //함수에 값을 전달하기 위해서는 익명 함수로 감싸야 함
                        >
                            {p.text}
                        </li>
                        ))}
                    </ul>
                </div>

                {/* 출석부 */}
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>아이디</td>
                                <td>이름</td>
                            </tr>

                            {students.map((student) => (
                                // 여러줄로 작성할 때 ()로 묶어 return
                                <tr>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    };
};

export default ListClass;