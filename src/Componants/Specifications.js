import React from 'react';
import seat from '../images/seat.png'
import luggage from '../images/luggage.png'
import engine from '../images/engine.png'
import second from '../images/second.png'
import speed from '../images/speed.png'
import transmission from '../images/transmission.png'
import fuel from '../images/fuel.png'
import platenumber from '../images/platenumber.png'
import options from '../images/options.png'
function Specifications() {
  return (
    <div className='specifications'>
        <div className="container">
            <h2>Specification</h2>
            <div className="row specRow">
                <div className="col-lg-3 colSpec">
                    <div className="specItem">
                        <div className="sitemHd">
                            <span>Seats</span>
                        </div>
                        <div className="sitemCon">
                            <div className="sitemThumb">
                                <img src={seat} alt="" />
                            </div>
                            <div className="sitemRight">
                                <span>2</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 colSpec">
                    <div className="specItem">
                        <div className="sitemHd">
                            <span>Luggage Space</span>
                        </div>
                        <div className="sitemCon">
                            <div className="sitemThumb">
                                <img src={luggage} alt="" />
                            </div>
                            <div className="sitemRight">
                                <span>2</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 colSpec">
                    <div className="specItem">
                        <div className="sitemHd">
                            <span>Engine</span>
                        </div>
                        <div className="sitemCon">
                            <div className="sitemThumb">
                                <img src={engine} alt="" />
                            </div>
                            <div className="sitemRight">
                                <span>V10 - 610 hp</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 colSpec">
                    <div className="specItem">
                        <div className="sitemHd">
                            <span>0 - 100 km/h</span>
                        </div>
                        <div className="sitemCon">
                            <div className="sitemThumb">
                                <img src={second} alt="" />
                            </div>
                            <div className="sitemRight">
                                <span>3.4 sec</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 colSpec">
                    <div className="specItem">
                        <div className="sitemHd">
                            <span>Maximum Speed</span>
                        </div>
                        <div className="sitemCon">
                            <div className="sitemThumb">
                                <img src={speed} alt="" />
                            </div>
                            <div className="sitemRight">
                                <span>324 km/h - 200 mph</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 colSpec">
                    <div className="specItem">
                        <div className="sitemHd">
                            <span>Transmission</span>
                        </div>
                        <div className="sitemCon">
                            <div className="sitemThumb">
                                <img src={transmission} alt="" />
                            </div>
                            <div className="sitemRight">
                                <span>Auto</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 colSpec">
                    <div className="specItem">
                        <div className="sitemHd">
                            <span>Fuel</span>
                        </div>
                        <div className="sitemCon">
                            <div className="sitemThumb">
                                <img src={fuel} alt="" />
                            </div>
                            <div className="sitemRight">
                                <span>Gasoline</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 colSpec">
                    <div className="specItem">
                        <div className="sitemHd">
                            <span>Options</span>
                        </div>
                        <div className="sitemCon">
                            <div className="sitemThumb">
                                <img src={options} alt="" />
                            </div>
                            <div className="sitemRight">
                                <span>Full Options</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 colSpec">
                    <div className="specItem">
                        <div className="sitemHd">
                            <span>Vehicle Plate Number</span>
                        </div>
                        <div className="sitemCon">
                            <div className="sitemThumb">
                                <img src={platenumber} alt="" />
                            </div>
                            <div className="sitemRight">
                                <span>TEXAS 202 HSZ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Specifications;
