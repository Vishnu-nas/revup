import React from 'react';
import { Button, Modal} from 'react-bootstrap';

function SupportPopUp({handleSupportClose,support}) {
  return (
    <div>
        <Modal show={support} onHide={handleSupportClose} className='modalDuration'>
      
        <Modal.Body>
          <div className="suppPop">
            <div className='suppCon'>
                <span>Please contact Revup support team to reschedule the appointment</span>
            </div>
            <Button onClick={handleSupportClose} className='supportBtn'>
                CONTACT SUPPORT
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SupportPopUp;
