import React from 'react';
import { Button, Modal  } from 'react-bootstrap';
function DurationPopUp({show,handleClose}) {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Set Duration</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DurationPopUp;
