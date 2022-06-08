import { useContext, useEffect, useState } from 'react';
import DataContext from '../context/DataContext';

import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap';

const CommentWriteForm = () => {
    const data = useContext(DataContext);

    const [show, setShow] = useState(false);
    const [inputText, setInputText] = useState('');
    const [files, setFiles] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // input 값을 가져오는 이벤트 함수
    const onChange = (e) => {
        setInputText(e.target.value);
    };

    // 댓글 추가
    const AddComment = () => {
        const nextComment = {
            id: data.state.id,
            user: data.state.user,
            text: data.state.text,
            product: null,// props 값으로 받아와 넣기
            img: URL.createObjectURL(files[0])
        };

        data.action.setComments([...data.state.comments, nextComment]);
        data.action.setId(data.state.id +1);

        // 모달 창 종료
        setShow(false);
    };

    // 파일 추가
    const onLoadFile = (e) => {
        const file = e.target.files;
        console.log(file);
        setFiles(file);
    };

    // 입력받은 파일의 값을 출력하는 함수
    const preview = () => {
        // files에 값이 없을 때는 실행하지 않도록 한다
        if (!files) return false;

        const img = document.querySelector("#img_box");
    
        img.style.backgroundImage = `url(${URL.createObjectURL(files[0])})`;
    };

  // preview 함수 실행 : 값이 바뀔때마다 실행
    useEffect(() => {
        preview();
        // return 이 실행될때 preview() 함수 실행
        // effect 이후 어떻게 정리할 것인지 (clean-up)
        return () => preview();
    });

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
                    {/* ⭐ 코멘트 작성란 */}
                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                        <Form.Control
                        onChange={onChange}
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        />
                    </FloatingLabel>

                    {/* ⭐ 파일 가져오는 태그 */}
                    <Form.Group controlId="formFileSm" className="my-3">
                        <Form.Label>상품 사진을 업로드해주세요</Form.Label>
                        {/* 파일 저장 위해서 onChange 메소드 사용함 */}
                        <Form.Control 
                        onChange={onLoadFile}
                        type="file" 
                        size="sm" />
                    </Form.Group>

                    <div 
                    id="img_box" 
                    style={
                        {width: "100px", height: "50px", 
                        backgroundSize: "cover"}}>
                                        
                    </div>

                    
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