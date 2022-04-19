import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useService } from '../../hooks/useData';
import { AiFillStar } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import './Checkout.css';

const Checkout = () => {
    const { serviceId } = useParams();
    const { services } = useService();
    const navigate = useNavigate();
    const service = services.find(service => service.id === +serviceId);

    return (
        <div className="Checkout">
            <div className="inner__checkout container">
                <div className="checkout__content">
                    <div className="checkout__form">
                        <div className="checkout__form__title">
                            <h2>Fill This Form</h2>
                        </div>
                        <form>
                            <div className="input__group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="input__group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="emai" />
                            </div>
                            <div className="input__group">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" name="phone" id="phone" />
                            </div>
                            <div className="input__group">
                                <label htmlFor="address">Address</label>
                                <textarea name="address" id="address"></textarea>
                            </div>
                            <div className="checkout__submit">
                                <button onClick={() => navigate('/thankyou')}>Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="checkoutProduct">
                        <div className="checkoutProduct__content">
                            <div className="checkoutProduct__img">
                                <img src={service?.img} alt="" />
                            </div>
                            <div className="checkoutProduct__description">
                                <div className="checkoutProduct__tag">
                                    <h4>{service?.category}</h4>
                                </div>
                                <div className="checkoutProduct__name">
                                    <h2>{service?.name}</h2>
                                </div>
                                <div className="checkoutProduct__price">
                                    <p>${service?.price}</p>
                                </div>
                                <div className="checkoutProduct__info">
                                    <div className="checkoutProduct__rating">
                                        <p><span><AiFillStar /></span> <span><AiFillStar /></span> <span><AiFillStar /></span> <span><AiFillStar /></span> <span><AiFillStar /></span> {service?.rating}</p>
                                    </div>
                                    <div className="checkoutProduct__enrolled">
                                        <p><span><FaUser /></span> {service?.enrolled}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;