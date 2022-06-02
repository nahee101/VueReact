import { Link } from "react-router-dom";

const About = () => {
    
    return (
        <div>
            <h1>About</h1>
            <p>어바웃 화면입니다</p>
            <Link to='/'>Home</Link>
        </div>
    );
};

export default About;