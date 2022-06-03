import { useContext, useState } from 'react';
import DataContext from '../context/DataContext';

import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap';

const CommentWriteForm = () => {
    const data = useContext(DataContext);

    const [show, setShow] = useState(false);
    const [inputText, setInputText] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // input 값을 가져오는 이벤트 함수
    const onChange = (e) => {
        setInputText(e.target.value)
    };

    const AddComment = () => {
        const nextComment = {
            id: data.state.id,
            user: data.state.user,
            text: data.state.text,
            product: null,// props 값으로 받아와 넣기
            img: null // 기능 확인 후 넣겠습니다
        };

        data.action.setComments([...data.state.comments, nextComment]);
        data.action.setId(data.state.id +1);

        // 모달 창 종료
        setShow(false);
    };

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                후기 작성
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>상품 후기를 작성해주세요</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {/* 코멘트 작성란 */}
                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                        <Form.Control
                        onChange={onChange}
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    {/* 파일 가져오는 태그 */}
                    <Form.Group controlId="formFileSm" className="my-3">
                        <Form.Label>상품 사진을 업로드해주세요</Form.Label>
                        <Form.Control type="file" size="sm" />
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    취소
                </Button>

                <Button variant="primary" onClick={AddComment}>
                    작성
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CommentWriteForm;