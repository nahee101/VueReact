import { useContext } from 'react';
import DataContext from '../context/DataContext';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
    const data = useContext(DataContext);

    const navigator = useNavigate();

    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        {/* 🧡 Nav.Link는 <a />처럼 href로 연결 */}
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </Nav>

                    {
                        data.state.user ? (
                            /* ⭐ 로그인 상태일 때 보이는 화면 */
                            <Nav>
                                <NavLink className="nav-link" to="/mypage">
                                    {data.state.user} 님의 Page
                                </NavLink>
                                <Button
                                onClick={
                                    () => {
                                        data.action.setUser(null);
                                        navigator('/');
                                    }
                                }>
                                    Log out
                                </Button>
                            </Nav>
                        ) : (
                            /* ⭐ 로그아웃 상태일 때 보이는 화면 */
                            <Nav>
                                <NavLink className="nav-link" to="/loginform">Log in</NavLink>
                            </Nav>
                        )
                    }
                </Container>
            </Navbar>

            <main className='m-3'>
                <Outlet></Outlet>
            </main>

            <footer className="main-footer">&copy; Green </footer>
        </div>
    );
};

export default Layout;