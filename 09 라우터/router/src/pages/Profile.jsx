import { useParams } from "react-router-dom";

// data.hong.name 객체에 접근
// data[hong][name] 객체 접근
const data = {
    hong: {
        name: 'hong-gil',
        address: 'Busan'
    },
    choi: {
        name: 'choi-min',
        address: 'Seoul'
    }
};

const Profile = () => {
    // 객체 형식으로 돌아오기 때문에
    const params = useParams();
    const profile = data[params.username];
    return (
        <div>
            <h1>프로필</h1>
            {/* JSX 구문 사용 */}
            {
                profile 
                ? <div>
                    <h3>{profile.name}</h3>
                    <p>{profile.address}</p>
                </div> 
                : <p>존재하지 않는 사용자입니다.</p>
            }
        </div>
    );
};

export default Profile;