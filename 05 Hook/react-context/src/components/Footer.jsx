import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
    // props가 아니라 context 사용
    const {isDark, setIsDark} = useContext(ThemeContext);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <footer
        className='footer'
        style={{
            backgroundColor: isDark ? 'black' : 'lightgray',
            color: isDark ? 'white' : 'black'
        }}
        >
            <button className='button' onClick={toggleTheme}>
                Dark Mode!
            </button>
        </footer>
    );
};

export default Footer;