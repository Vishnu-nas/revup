import React,{useState} from 'react';
import { Button, Modal,Form  } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function TimeDatePopUp({handletimeDateClose,timeDate}) {
    const [date, setDate] = useState(new Date());
    const [radio,setRadio] = useState('false')
  return (
    <div>
        <Modal show={timeDate} onHide={handletimeDateClose} className='modalTimeDate'>
        <Modal.Header closeButton>
          <Modal.Title>Pickup Date & Time</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Calendar onChange={setDate} value={date}/>
          <div className='chooseTimeSlot'>
              <h3>Available Time Slots</h3>
          <Form>

            <Form.Check inline label="07:00 am" type="radio" id="radio1" value="radio1" checked={radio === "radio1"} onChange={(e)=>{setRadio(e.target.value)}}/>

            <Form.Check inline label="08:00 am" type="radio" id="radio2" value="radio2" checked={radio === "radio2"} onChange={(e)=>{setRadio(e.target.value)}}/>
                                            
            <Form.Check inline label="09:00 am" type="radio" id="radio3" value="radio3" checked={radio === "radio3"} onChange={(e)=>{setRadio(e.target.value)}}/>
                                            
            <Form.Check inline label="10:00 am" type="radio" id="radio4" value="radio4" checked={radio === "radio4"} onChange={(e)=>{setRadio(e.target.value)}}/> 

            <Form.Check inline label="11:00 am" type="radio" id="radio5" value="radio5" checked={radio === "radio5"} onChange={(e)=>{setRadio(e.target.value)}}/>

            <Form.Check inline label="12:00 pm" type="radio" id="radio6" value="radio6" checked={radio === "radio6"} onChange={(e)=>{setRadio(e.target.value)}}/>
                                            
            <Form.Check inline label="01:00 pm" type="radio" id="radio7" value="radio7" checked={radio === "radio7"} onChange={(e)=>{setRadio(e.target.value)}}/>
                                            
            <Form.Check inline label="02:00 pm" type="radio" id="radio8" value="radio8" checked={radio === "radio8"} onChange={(e)=>{setRadio(e.target.value)}}/> 

            <Form.Check inline label="03:00 pm" type="radio" id="radio9" value="radio9" checked={radio === "radio9"} onChange={(e)=>{setRadio(e.target.value)}}/> 

            <Form.Check inline label="04:00 pm" type="radio" id="radio10" value="radio10" checked={radio === "radio10"} onChange={(e)=>{setRadio(e.target.value)}}/> 

            <Form.Check inline label="05:00 pm" type="radio" id="radio11" value="radio11" checked={radio === "radio11"} onChange={(e)=>{setRadio(e.target.value)}}/> 

            <Form.Check inline label="06:00 pm" type="radio" id="radio12" value="radio12" checked={radio === "radio12"} onChange={(e)=>{setRadio(e.target.value)}}/> 

          </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handletimeDateClose} className='closeBtn'>
            Cancel 
          </Button>
          <Button variant="primary" onClick={handletimeDateClose} className='saveBtn'>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TimeDatePopUp;
