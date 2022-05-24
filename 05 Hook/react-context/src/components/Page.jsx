import React from 'react';

import { ThemeContext } from '../context/ThemeContext';

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Page = () => {
    return (
        <div className="page">
            <Header />
            <Content />
            <Footer />
        </div>
    );
};

export default Page;