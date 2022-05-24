import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';


const Content = () => {
    // props가 아니라 context 사용
    const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext);

    return (
        <div
        className='content'
        style={{
            backgroundColor: isDark ? 'black' : 'lightgray',
            color: isDark ? 'white' : 'black'
        }}
        >
            <p>{user} 님, 좋은 하루 되세요</p>
        </div>
    );
};

export default Content;