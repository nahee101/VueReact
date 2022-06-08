import { useContext } from 'react';
import DataContext from '../context/DataContext';

import { Card, Button } from 'react-bootstrap';
import CommentWriteForm from './CommentWriteForm';

const ProductionDisplay = ( {product} ) => {
    const data = useContext(DataContext);

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require(`../img/${product.img}`)} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {product.text}
                        </Card.Text>
                        <Button variant="primary" className='mb-3'>구매</Button>
                        {/* 🧡 카드 컴포넌트 내부에 모달 컴포넌트: CommentWriteForm */}
                        {/* 카드 내부에 사용할 모달 컴포넌트를 넣는다 */}
                        <CommentWriteForm />
                    </Card.Body>

                    <Card.Footer>
                        {/* data.state.comments의 값을 바로 쓰지 말고,
                        product 값과 name을 비교해서 같으면 사용 */}
                        {
                            data.state.comments.map((comment) => (
                                <li key={comment.id}>
                                    {/* ⭐ 이미지 미리보기 - JS DOM을 선택해서 가져오기 위해 id를 작성한다 */}
                                    <div 
                                    id="img_box" 
                                    style={
                                        {width: "50px", height: "50px", 
                                        backgroundSize: "cover",
                                        backgroundImage: `url(${comment.image})` }}>
                                        
                                    </div>
                                    {comment.user} : {comment.text}
                                </li>
                            ))
                        }
                        
                    </Card.Footer>
            </Card>
        </div>
    );
};

export default ProductionDisplay;