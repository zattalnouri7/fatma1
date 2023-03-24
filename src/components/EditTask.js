import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { Edittask } from '../redux/slice/TodoSlice';

function EditTask({ todo }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [task, setTask] = useState({
        title: "",
        description: ""
    })
    const dispatch = useDispatch();
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                EDIT TASK
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body><input type='texte' placeholder='enter task title' onChange={(e) => { setTask({ ...task, title: e.target.value }) }} />
                    <input type='texte' placeholder='enter task title' onChange={(e) => { setTask({ ...task, description: e.target.value }) }} /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => dispatch(Edittask({ id: todo.id, task }))}>
                        edit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditTask