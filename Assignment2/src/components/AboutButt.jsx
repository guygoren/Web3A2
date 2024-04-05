import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function AboutButt() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
          <Modal.Title>About</Modal.Title>
        <Modal.Body>
          Names: Evan Gadsby & Guy Goren <br />
          Github repo: <a href='https://github.com/guygoren/Web3A2'>https://github.com/guygoren/Web3A2</a> <br />
          Description: We are using React as well as React Redux, we decided to use React Redux because we wanted to have
          states be handled in a consistant manner as when we began, we were not sure what the state handling would look like.
          React Redux may have been overkill but at least we were able to implement a technology as well as learn a new one at the 
          same time.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AboutButt;