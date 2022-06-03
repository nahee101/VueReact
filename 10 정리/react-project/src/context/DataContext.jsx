/* 🧡 Context API를 이용해서 데이터 공용으로 사용하기 */
/*  context를 사용하면 단계마다 일일이 props를 넘겨주지 않고도 
    컴포넌트 트리 전체에 데이터를 제공할 수 있다 */
import { createContext, useState } from "react";

/* 내보낸 DataContext를 통해서 value 값을 넣어 사용 */
const DataContext = createContext();

/* 🧡 사전에 Provider를 작성해서 작성하였던 value 값을 가진 컴포넌트를 내보낼 것 */
/* ⭐ Context 오브젝트에 포함된 React 컴포넌트인 Provider는 
    context를 구독하는 컴포넌트들에게 context의 변화를 알리는 역할 */
const DataProvider = ({children}) => {
    const [user, setUser] = useState('임의의 이름');

    // comment로 사용할 내용
    const [comments, setComments] = useState(
        [
            {
                id: 1,
                product: '책',
                user: 'green',
                text: '재밌어요',
                img: null
            }
        ]
    );
    // 증가하는 id 값
    const [id, setId] = useState(2);

    // product로 사용할 내용
    const [product, setProduct] = useState(
        {
            id: 1,
            name: '책',
            text: '설명',
            img: 'book.png'
        }
    );

    /* 사용할 value 값을 state와 action으로 분리한다 */
    const value = {
        state: {user, comments, id, product},
        action: {setUser, setComments, setId, setProduct}
    };

    /* children을 통해서 value 값을 사용한 컴포넌트를 넘긴다 */
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
};

/* 🧡 Consume 작성 */
/* DataContext.Consumer가 사용할 내용을 DataConsumer로 표현 */
/* ⭐ context 변화를 구독하는 React 컴포넌트
    이 컴포넌트를 사용하면 함수 컴포넌트안에서 context를 구독할 수 있다 */
const { Consumer: DataConsumer } = DataContext;

/* 컴포넌트로 쓰기 위한 Provider과 Consumer */
export { DataProvider, DataConsumer };
/* 값을 사용하기 위한 default Context API */
export default DataContext;