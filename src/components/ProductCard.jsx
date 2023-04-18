import React from 'react'
import './ProductCard.css'
import phoneImage from '../assets/images/phoneImage.png'
import Star from '../assets/icons/starIcon.svg'
const ProductCard = () => {
    return (
        <section className='product_card'>
            <div className="product_card_container">
                <div className="product_card_image">
                    <img src={phoneImage} alt="" />
                </div>
                <div className="product_card_content">
                    <p className="phone_details">Apple iPhone 13 (128GB)-Blue</p>
                    <div className="product_card_innercontent">
                        <div className="product_card_starIcons">
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                        </div>
                        <div className="product_card_text">Rs&nbsp;
                            <p className='product_card_linedamount'>59999</p> /-&nbsp;
                            <p className="product_Card_amount">47999/-</p>
                        </div>
                    </div>
                    <div className="product_Card_button">
                        <button className="add_to_cart_button">ADD TO CART</button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ProductCard