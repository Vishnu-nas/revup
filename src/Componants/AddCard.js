import React from 'react'
import { Button, Modal,Form  } from 'react-bootstrap';
import Cards from '../images/cards.png'
function AddCard({handleAddCardClose,addCard}) {
  return (
    <Modal show={addCard} onHide={handleAddCardClose} className='modalDuration'>
        <Modal.Header closeButton className='border-0'>
          <Modal.Title>ADD YOUR CARD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='chooseLocation'>
            <div className="cardAccept mt-0">
                <p>We accepts all major credit and debit cards:</p>
                <div className="cards">
                    <img src={Cards} alt="" />
                </div>
            </div>
            <div className="row accRow contactRow">                    
                <div className="col-lg-12 colRgRight p-0 align-self-center">
                    <div className="rgRtWrap">
                        <div action="#" class="register-form addCardFrm">
                            <div className="formWrap FormRow frmCard row">
                                <div className="form-controller col-lg-12">
                                    <label htmlFor="">Card Number</label>
                                    <input type="text" name="fn" />
                                </div>
                                <div className="form-controller col-lg-12">
                                    <label htmlFor="">Name on card</label>
                                    <input type="text" name="ln" />
                                </div>  
                                <div className="form-controller col-lg-12">
                                    <label htmlFor="">Expiry Date</label>
                                    <div className="expDateSelect">
                                        <div class="customs_selects">
                                            <select name="product" class="customs_sel_box">
                                                <option value="popularity">Select</option>
                                                <option value="new">1</option>
                                                <option value="low">2</option>
                                                <option value="high">3</option>
                                            </select>
                                        </div>
                                        <div class="customs_selects">
                                            <select name="product" class="customs_sel_box">
                                                <option value="popularity">Select</option>
                                                <option value="new">1</option>
                                                <option value="low">2</option>
                                                <option value="high">3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div> 
                                <fieldset>
                                    <label class="custom-control black-checkbox">
                                        <input type="checkbox" class="fill-control-input" />
                                        <span class="fill-control-indicator"></span>
                                        <span class="fill-control-description">Use my default payment</span>
                                    </label>
                                </fieldset>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='border-0'>
          <Button variant="secondary" onClick={handleAddCardClose} className='closeBtn'>
            Cancel 
          </Button>
          <Button variant="primary" onClick={handleAddCardClose} className='saveBtn'>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default AddCard;