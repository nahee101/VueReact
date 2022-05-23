/* */
import { useState } from "react";
import ProductDisplay from './ProductDisplay';

const ProductList = () => {

    // 객체로 state 변수를 생성한다
    const [items, setItems] = useState([
        {id: 1, name: '모자', color: 'white', stock: 3},
        {id: 2, name: '양말', color: 'red', stock: 5},
        {id: 3, name: '신발', color: 'black', stock: 3}
    ]);

    const [wish, setWish] = useState(0);

    return (
        <div>
            <h1>Product List</h1>
            <p>장바구니: {wish}</p>
            {
                items.map((item) => (
                    <div key={item.id}>
                        <ProductDisplay item={item}/>
                        <button onClick={() => {
                            // setItems를 이용해서 item의 stock 값을 1 감소하려고 할 때
                            // 이때 setItems는 넣어준 값을 items에 할당한다
                            // 선택되지 않은 id 값을 가진 item은 다시 배열에 넣고,
                            // 선택된 id 값을 가진 item은 스프레드 연산자를 사용해서
                            // stock 값을 1 감소시킨다
                            setItems(items.map(i => i.id === item.id ? {...i, stock: i.stock -1} : i))
                            setWish(wish +1);
                        }}>장바구니에 담기</button>                    
                    </div>
                ))
            }
        </div>
    )
};

export default ProductList;