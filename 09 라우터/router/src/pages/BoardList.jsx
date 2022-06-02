import { Link, Outlet } from "react-router-dom";

const BoardList = () => {
    return (
        <div>
            <h1>Board</h1>
            <ul>
                <li>
                    <Link to='/boardlist/1'>게시글1</Link>
                </li>
            </ul>
            {/* Outlet을 통해서 중첩된 컴포넌트의 화면이 출력된다 */}
            <Outlet />
        </div>
    )
};

export default BoardList;