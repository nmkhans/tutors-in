import React from 'react';
import './Service.css';
import { AiFillStar, AiOutlineArrowRight } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';

const Service = ({service}) => {
    console.log(service);
    const {name, img, category, enrolled, price, rating } = service;

    return (
        <div className="Service">
            <div className="service__feature">
                <img src={img} alt="" />
            </div>
            <div className="service__detail">
                <div className="service__price">
                    <p>${price}</p>
                </div>
                <div className="service__tag">
                    <h4>{category}</h4>
                </div>
                <div className="service__title">
                    <h2>{name}</h2>
                </div>
                <div className="service__enroll">
                    <div className="service__people">
                        <p><span><FaUser /></span>{enrolled}</p>
                    </div>
                    <div className="service__rating">
                        <p><span><AiFillStar/></span> <span><AiFillStar/></span> <span><AiFillStar/></span> <span><AiFillStar/></span> <span><AiFillStar/></span> {rating}</p>
                    </div>
                    <div className="service__button">
                        <button>Purchase <span><AiOutlineArrowRight/></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;