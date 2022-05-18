import {useState} from 'react';

const InputArrow = () => {
    const [message, setMessage] = useState('');
    const [form, setForm] = useState({
        user: '',
        message: ''
    });

    // 익명함수와 화살표 함수는 동일하게 사용한다.
    const inputChange = function(e) {
        setMessage(e.target.value);
    };
    const formChange = (e) => {
        // 스프레드 연산자를 사용해서 form 안의 값을 꺼내어서 사용
        // 동일한 키 값은 가장 마지막에 작성된 값으로 대체함
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };

    return (
        <div>
            <h1>{message}</h1>
            <input type='text' onChange={inputChange}></input>
            <h2>
                {form.user}의 메시지: {form.message}
            </h2>
            <input type='text' name='user' onChange={formChange}></input>
            <input type='text' name='message' onChange={formChange}></input>
        </div>
    );
};

export default InputArrow;