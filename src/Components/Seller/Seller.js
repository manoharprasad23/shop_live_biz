import React from 'react';
import {Helmet} from "react-helmet";
import { items } from './../../data';
import './Seller.css';

const Seller = () => {
    const {sellerItems} = items;
    console.log(sellerItems);
    return (
        <div className="seller-container">
            <div className="live-video">
                <Helmet>
                    <div id="fb-root"></div>
                    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0" nonce="CuarFFHE"></script>
                </Helmet>
                <div className="fb-video fb-live-video" data-href="https://www.facebook.com/facebook/videos/10153231379946729/" data-width="500" data-show-text="false"><blockquote cite="https://developers.facebook.com/facebookapp/videos/10153231379946729/" className="fb-xfbml-parse-ignore"><a href="https://developers.facebook.com/facebookapp/videos/10153231379946729/">How to Share With Just Friends</a><p>How to share with just friends.</p>Posted by <a href="https://www.facebook.com/facebookapp/">Facebook App</a> on Friday, December 5, 2014</blockquote></div>
            </div>
            <div className="items">
            {
                sellerItems.map((item)=>{
                    const {url, name, description, price, id} = item;
                    return (
                        <div key={id} className="product">
                            <div className="image-container">
                                <img className="image" src={url} alt="" />
                            </div>
                            <div className="product-details">
                                <div className="description">
                                    <p>{name}</p>
                                    <p>{description}</p>
                                </div>
                                <div className="price">
                                    <p>{price}</p>
                                    <div className="Quantity">
                                        <span>-</span>
                                        <input type="text" value="0"/>
                                        <span>+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Seller
