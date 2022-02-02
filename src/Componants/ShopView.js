import React from 'react';
import tshirt from '../images/tshirt.png'
import watch from '../images/watch.png'
function ShopView() {
  return (
    <div className='shopWrapper'>
        <div className="container">
            <div className="shopRow">
                <div className="shopHd">
                    <div className="shopHdLeft">
                        <h2>All Products</h2>
                    </div>
                    <div className="shopHdRt">
                        <div className="shopRtItem">
                            <span> <i class="fad fa-sort-alt"></i> Sort By</span>
                            <div class="customs_selects">
                                <select name="product" class="customs_sel_box">
                                    <option value="popularity">Popularity</option>
                                    <option value="new">new</option>
                                    <option value="low">low to high</option>
                                    <option value="high">high to low</option>
                                </select>
                            </div>
                        </div>
                        <div className="shopRtItem">
                            <span> <i class="fad fa-shopping-bag"></i> Product</span>
                            <div class="customs_selects">
                                <select name="product" class="customs_sel_box">
                                    <option value="popularity">All</option>
                                    <option value="new">Caps</option>
                                    <option value="low">T-Shirts</option>
                                    <option value="high">Watches</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shopList row">
                    <div className="col-lg-3 col-sm-6 col-12 p-0">
                        <div className="productItem">
                            <div className="prodThumb">
                                <img src={tshirt} alt="" />
                            </div>
                            <div className="prodDetail">
                                <div class="review">
                                    <span><i class="fa fa-star" aria-hidden="true"></i> 4.9</span>                                    
                                </div>
                                <h2 className='prodName'>Men'S T-Shirt Lamborghini</h2>
                                <span className='prodPrice'>$299</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 p-0">
                        <div className="productItem">
                            <div className="prodThumb">
                                <img src={watch} alt="" />
                            </div>
                            <div className="prodDetail">
                                <div class="review">
                                    <span><i class="fa fa-star" aria-hidden="true"></i> 4.9</span>                                    
                                </div>
                                <h2 className='prodName'>Men'S T-Shirt Lamborghini</h2>
                                <span className='prodPrice'>$299</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 p-0">
                        <div className="productItem">
                            <div className="prodThumb">
                                <img src={tshirt} alt="" />
                            </div>
                            <div className="prodDetail">
                                <div class="review">
                                    <span><i class="fa fa-star" aria-hidden="true"></i> 4.9</span>                                    
                                </div>
                                <h2 className='prodName'>Men'S T-Shirt Lamborghini</h2>
                                <span className='prodPrice'>$299</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 p-0">
                        <div className="productItem">
                            <div className="prodThumb">
                                <img src={watch} alt="" />
                            </div>
                            <div className="prodDetail">
                                <div class="review">
                                    <span><i class="fa fa-star" aria-hidden="true"></i> 4.9</span>                                    
                                </div>
                                <h2 className='prodName'>Men'S T-Shirt Lamborghini</h2>
                                <span className='prodPrice'>$299</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 p-0">
                        <div className="productItem">
                            <div className="prodThumb">
                                <img src={tshirt} alt="" />
                            </div>
                            <div className="prodDetail">
                                <div class="review">
                                    <span><i class="fa fa-star" aria-hidden="true"></i> 4.9</span>                                    
                                </div>
                                <h2 className='prodName'>Men'S T-Shirt Lamborghini</h2>
                                <span className='prodPrice'>$299</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 p-0">
                        <div className="productItem">
                            <div className="prodThumb">
                                <img src={watch} alt="" />
                            </div>
                            <div className="prodDetail">
                                <div class="review">
                                    <span><i class="fa fa-star" aria-hidden="true"></i> 4.9</span>                                    
                                </div>
                                <h2 className='prodName'>Men'S T-Shirt Lamborghini</h2>
                                <span className='prodPrice'>$299</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 p-0">
                        <div className="productItem">
                            <div className="prodThumb">
                                <img src={tshirt} alt="" />
                            </div>
                            <div className="prodDetail">
                                <div class="review">
                                    <span><i class="fa fa-star" aria-hidden="true"></i> 4.9</span>                                    
                                </div>
                                <h2 className='prodName'>Men'S T-Shirt Lamborghini</h2>
                                <span className='prodPrice'>$299</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 p-0">
                        <div className="productItem">
                            <div className="prodThumb">
                                <img src={watch} alt="" />
                            </div>
                            <div className="prodDetail">
                                <div class="review">
                                    <span><i class="fa fa-star" aria-hidden="true"></i> 4.9</span>                                    
                                </div>
                                <h2 className='prodName'>Men'S T-Shirt Lamborghini</h2>
                                <span className='prodPrice'>$299</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shopPagination">
                    <div className="paginationRow">
                        <div className="page">
                            <span className="page-item active">
                                1
                            </span>
                            <span className="page-item">
                                2
                            </span>
                            <span className="page-item">
                                3
                            </span>
                            <span className="page-item">
                                4
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ShopView;
