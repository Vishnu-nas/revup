import React,{useState} from 'react';
import tshirt from '../images/tshirt.png'
import watch from '../images/watch.png'
function CartView() {
    const [increment,setIncrement] = useState(1)
    const handleIncrement = () =>{
        setIncrement(increment + 1);
    }
    const handleDecrement = () =>{
        if(increment != 0){
            setIncrement(increment - 1);
        }
    }
  return (
    <div className='cartWrap'>
        <div className="container">
            <div className="cartTable">
            <div className="cartHd">
                <div className="cartLeft">
                    <h1>cart</h1>
                </div>
                <div className="cartRight">
                    <span>3 Items in your cart</span>
                </div>
            </div>
            <div className="table-col-3">        
                <div className="table-responsive table-sticky">
                    <table className="table table-bordered table-striped">
                        <tbody className="text-center align-middle cartTableBody">
                            <tr>
                                <th className="text-start p-3" scope="row">Item</th>
                                <th className='tbHd'>Price </th>
                                <th className='tbHd'>Quantity</th>
                                <th className='tbHd'>Sub Total</th>
                            </tr>
                            <tr className='cartItem'>
                                <td>
                                    <div className="product">
                                        <div className="product--img">
                                            <img src={tshirt} alt="" />
                                        </div>
                                        <div className="product--name">
                                            <h2>Tonino Lamborghini Spyder Chrono Watch</h2>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="priceForProduct">
                                        <span className='cartPrice'>
                                            $1399.00
                                        </span>
                                        <span className='deliveryfee'>
                                            $8.00 Delivery Fee
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className="quantityAlter">
                                    <div className="countAlter">
                                        <span className='minus otrCircle' onClick={handleDecrement}>-</span>
                                        <span className="countNo">{increment}</span>
                                        <span className='plus otrCircle' onClick={handleIncrement}>+</span>
                                    </div>
                                    </div>
                                </td>
                                <td className='subTotal'>
                                    <span>$1501.00</span>
                                </td>
                                <td className='trash'>
                                    <span><i className="fas fa-trash-alt"></i></span>
                                </td>
                            </tr>
                            <tr className='cartItem itemNoStock'>
                                <td>
                                    <div className="product">
                                        <div className="product--img">
                                            <img src={watch} alt="" />
                                        </div>
                                        <div className="product--name">
                                            <h2>Tonino Lamborghini Spyder Chrono Watch</h2>
                                            <div className="stockInfo">
                                                <span>OUT OF STOCK</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="priceForProduct">
                                        <span className='cartPrice'>
                                            $1399.00
                                        </span>
                                        <span className='deliveryfee'>
                                            $8.00 Delivery Fee
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className="quantityAlter">
                                    <div className="countAlter">
                                        <span className='minus otrCircle' onClick={handleDecrement}>-</span>
                                        <span className="countNo">{increment}</span>
                                        <span className='plus otrCircle' onClick={handleIncrement}>+</span>
                                    </div>
                                    </div>
                                </td>
                                <td className='subTotal'>
                                    <span>$1501.00</span>
                                </td>
                                <td className='trash'>
                                    <span><i className="fas fa-trash-alt"></i></span>
                                </td>
                            </tr>
                            <tr className='cartItem'>
                                <td>
                                    <div className="product">
                                        <div className="product--img">
                                            <img src={tshirt} alt="" />
                                        </div>
                                        <div className="product--name">
                                            <h2>Tonino Lamborghini Spyder Chrono Watch</h2>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="priceForProduct">
                                        <span className='cartPrice'>
                                            $1399.00
                                        </span>
                                        <span className='deliveryfee'>
                                            $8.00 Delivery Fee
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div className="quantityAlter">
                                    <div className="countAlter">
                                        <span className='minus otrCircle' onClick={handleDecrement}>-</span>
                                        <span className="countNo">{increment}</span>
                                        <span className='plus otrCircle' onClick={handleIncrement}>+</span>
                                    </div>
                                    </div>
                                </td>
                                <td className='subTotal'>
                                    <span>$1501.00</span>
                                </td>
                                <td className='trash'>
                                    <span><i className="fas fa-trash-alt"></i></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}

export default CartView;
