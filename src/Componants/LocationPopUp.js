import React,{useState} from 'react';
import { Button, Modal,Form  } from 'react-bootstrap';

function LocationPopUp({handleLocationClose,location}) {
const [radio,setRadio] = useState();
const handleLocChange=(e)=>{
    setRadio(e.target.value);
}
  return (
    <div>
        <Modal show={location} onHide={handleLocationClose} className='modalDuration'>
        <Modal.Header closeButton>
          <Modal.Title>Pickup Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='chooseLocation'>
          <form>
            <div className="locationItem">
                <input type='radio' name='loc1' value='loc1' onChange={handleLocChange}/>
                <div className="liwrap">
                    <div className="liwLeft">
                        <i className='fad fad fa-map-marker-alt'></i>
                    </div>
                    <div className="liwRt">
                        <span>Worls Trade Center</span>
                        <h3>285 Fulton St, New York,NY 10007</h3>
                    </div>
                </div>
            </div>
            <div className="locationItem">
                <input type='radio' name='loc1' value='loc1' onChange={handleLocChange}/>
                <div className="liwrap">
                    <div className="liwLeft">
                        <i className='fad fad fa-map-marker-alt'></i>
                    </div>
                    <div className="liwRt">
                        <span>Worls Trade Center</span>
                        <h3>285 Fulton St, New York,NY 10007</h3>
                    </div>
                </div>
            </div>
            <div className="locationItem">
                <input type='radio' name='loc1' value='loc1' onChange={handleLocChange}/>
                <div className="liwrap">
                    <div className="liwLeft">
                        <i className='fad fad fa-map-marker-alt'></i>
                    </div>
                    <div className="liwRt">
                        <span>Worls Trade Center</span>
                        <h3>285 Fulton St, New York,NY 10007</h3>
                    </div>
                </div>
            </div>
          </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleLocationClose} className='closeBtn'>
            Cancel 
          </Button>
          <Button variant="primary" onClick={handleLocationClose} className='saveBtn'>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LocationPopUp;
