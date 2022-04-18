import React from 'react';
import './Service.css';
import { AiFillStar, AiOutlineArrowRight } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {name, img, category, enrolled, price, rating, id } = service;
    const navigate = useNavigate();

    const toCheckOut = (id) => {
        navigate(`/checkout/${id}`);
    }

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
                        <button onClick={() => toCheckOut(id)}>Purchase <span><AiOutlineArrowRight/></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;