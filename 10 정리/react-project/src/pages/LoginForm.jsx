import { useContext, useState } from 'react';
import DataContext from '../context/DataContext';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const data = useContext(DataContext);

    const [inputText, setInputText] = useState('');

    const navigator = useNavigate();

    // input 값 받아오기
    const onChange = (e) => {
        setInputText(e.target.value) 
    
    };

    // submit 버튼을 눌렀을 때 받아온 값을 data를 통하여 값을 할당하기 
    // 로그인
    const loginUser = (e) => {
        e.preventDefault();
        data.action.setUser(inputText);

        // '/'로 이동
        navigator('/');
    }

    return (
        <div>
            <Form onSubmit={loginUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ID</Form.Label>
                    {/* 🧡 input과 비슷한 속성 */}
                    <Form.Control 
                    onChange={onChange}
                    type="text" 
                    placeholder="Enter ID" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default LoginForm;