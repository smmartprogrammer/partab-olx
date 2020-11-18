import React from 'react';
import '../Component/moreProduct.css';
import { Link } from 'react-router-dom';

class MoreProduct extends React.Component {


    render() {
        return (
            <div className="firstGroup" >
                <div className="firstGroup_productBorder">
                    <div className="lastSearch"><h3 className="text">Based on your Last Search</h3></div>
                    <div className="viewMore">View More </div>
                </div>
                <div className="firstGroup_productsLead">

                    <div className="firstGroup_product">
                        <Link to="/productDescription" >
                            <div className="product-image">
                                <img src=" https://tribune-reloaded.s3.amazonaws.com/media/images/1395170-bilalolx-1493376542/1395170-bilalolx-1493376542.jpg" />
                            </div>
                            <div className="product-detail">
                                <div className="yellow-line"></div>
                                <div className="product-particular">
                                    <div className="price-and-detail">
                                        <h3>Rs. 10,000/-</h3>
                                        <p>Product Detail</p>
                                    </div>
                                    <div className="date">
                                        <p>Nov 06</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>



                    <div className="firstGroup_product">
                    <Link to="/productDescription" >
                        <div className="product-image">
                            <img src=" https://tribune-reloaded.s3.amazonaws.com/media/images/1395170-bilalolx-1493376542/1395170-bilalolx-1493376542.jpg" />
                        </div>
                        <div className="product-detail">
                            <div className="yellow-line"></div>
                            <div className="product-particular">
                                <div className="price-and-detail">
                                    <h3>Rs. 10,000/-</h3>
                                    <p>Product Detail</p>
                                </div>
                                <div className="date">
                                    <p>Nov 06</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>


                    <div className="firstGroup_product">
                    <Link to="/productDescription" >
                        <div className="product-image">
                            <img src=" https://tribune-reloaded.s3.amazonaws.com/media/images/1395170-bilalolx-1493376542/1395170-bilalolx-1493376542.jpg" />
                        </div>
                        <div className="product-detail">
                            <div className="yellow-line"></div>
                            <div className="product-particular">
                                <div className="price-and-detail">
                                    <h3>Rs. 10,000/-</h3>
                                    <p>Product Detail</p>
                                </div>
                                <div className="date">
                                    <p>Nov 06</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>



                    <div className="firstGroup_product">
                    <Link to="/productDescription" >
                        <div className="product-image">
                            <img src=" https://tribune-reloaded.s3.amazonaws.com/media/images/1395170-bilalolx-1493376542/1395170-bilalolx-1493376542.jpg" />
                        </div>
                        <div className="product-detail">
                            <div className="yellow-line"></div>
                            <div className="product-particular">
                                <div className="price-and-detail">
                                    <h3>Rs. 10,000/-</h3>
                                    <p>Product Detail</p>
                                </div>
                                <div className="date">
                                    <p>Nov 06</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>




                </div>
            </div>
        )
    }
}



export default MoreProduct;