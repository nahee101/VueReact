import DataContext from "../context/DataContext";
import { useContext } from "react";

/* 🧡 Context API를 사용해서 관련된 값을 가져온다 */
const MyPage = () => {
    const data = useContext(DataContext);

    return (
        <div>
            <p>{data.state.user}</p>
        </div>
    );
};

export default MyPage;