import React,{useState} from 'react';
import { Button, Modal,Form  } from 'react-bootstrap';
function DurationPopUp({show,handleClose}) {
  const [radio,setRadio] = useState('false')
  return (
    <div>
      <Modal show={show} onHide={handleClose} className='modalDuration'>
        <Modal.Header closeButton>
          <Modal.Title>Set Duration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='chooseDuration'>
          <Form>

            <Form.Check inline label="1 hour" type="radio" id="radio1" value="radio1" checked={radio === "radio1"} onChange={(e)=>{setRadio(e.target.value)}}/>

            <Form.Check inline label="2 hour" type="radio" id="radio2" value="radio2" checked={radio === "radio2"} onChange={(e)=>{setRadio(e.target.value)}}/>
                                            
            <Form.Check inline label="3 hour" type="radio" id="radio3" value="radio3" checked={radio === "radio3"} onChange={(e)=>{setRadio(e.target.value)}}/>
                                            
            <Form.Check inline label="4 hour" type="radio" id="radio4" value="radio4" checked={radio === "radio4"} onChange={(e)=>{setRadio(e.target.value)}}/> 

            <Form.Check inline label="5 hour" type="radio" id="radio5" value="radio5" checked={radio === "radio5"} onChange={(e)=>{setRadio(e.target.value)}}/>

            <Form.Check inline label="6 hour" type="radio" id="radio6" value="radio6" checked={radio === "radio6"} onChange={(e)=>{setRadio(e.target.value)}}/>
                                            
            <Form.Check inline label="7 hour" type="radio" id="radio7" value="radio7" checked={radio === "radio7"} onChange={(e)=>{setRadio(e.target.value)}}/>
                                            
            <Form.Check inline label="8 hour" type="radio" id="radio8" value="radio8" checked={radio === "radio8"} onChange={(e)=>{setRadio(e.target.value)}}/> 

          </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className='closeBtn'>
            Cancel 
          </Button>
          <Button variant="primary" onClick={handleClose} className='saveBtn'>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DurationPopUp;
