import { Link, Outlet, NavLink } from "react-router-dom";
/* ⭐ NavLink: 라우터의 경로가 일치하는 경우 특정 스타일 또는 클래스를 적용한다 */

const BoardList = () => {
    const numList = [1, 2, 3, 4, 5]

    const activeStyle = {
        color: 'green',
        fontWeight: 'bold'
    };

    return (
        <div>
            <h1>Board</h1>
            <ul>
                {
                    numList.map((n, idx) => (
                        <li key={idx}>
                            <NavLink 
                            to={`/boardlist/${n}`}
                            // NavLink에 있는 isActive를 비구조화 할당으로 들고 온다
                            style={({isActive}) => (
                            // className으로 작성할 때도 동일하다
                            // className = {({isActive}) => (isActive ? activeStyle : undefined)}
                                isActive ? activeStyle : undefined)}
                            >
                                게시글{n}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
            {/* Outlet을 통해서 중첩된 컴포넌트의 화면이 출력된다 */}
            <Outlet />
        </div>
    )
};

export default BoardList;