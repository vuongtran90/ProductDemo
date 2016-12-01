import React, { Component } from 'react';
import { Link } from 'react-router';
var Slider = require('react-slick');

import Food from '../products/foods/FoodComponent.jsx';

export default class Home extends Component {
    render(){
        var settings = {
            speed: 500,
            slidesToShow: 3
        };
        return (
            <div>
                <img src="http://i.imgur.com/emPvxHV.jpg" className="banner"/>
                <div className="latest">
                    <h3>Latest Glasses</h3>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <figure>
                                    <img src='http://i.imgur.com/kbwVKgs.jpg' />
                                <span>HT01</span>
                                </figure>
                            </div>
                            <div>
                                <figure>
                                    <img src='http://i.imgur.com/EGfySVL.jpg' />
                                <span>HT02</span>
                                </figure>
                            </div>
                            <div>
                                <figure>
                                    <img src='http://i.imgur.com/zMyW9bF.jpg' />
                                <span>HT03</span>
                                </figure>
                            </div>
                            <div>
                                <figure>
                                    <img src='http://i.imgur.com/DNHN7IO.jpg' />
                                <span>HT04</span>
                                </figure>
                            </div>
                        </Slider>
                    </div>
                    <h3>Latest Wines</h3>
                    <div className="slider-container wines-container">
                        <Slider {...settings}>
                            <div>
                                <figure>
                                    <img src='http://i.imgur.com/eF9NITR.jpg' />
                                <span>BT01</span>
                                </figure>
                            </div>
                            <div>
                                <figure>
                                    <img src='http://i.imgur.com/FL10kY5.jpg' />
                                <span>BT02</span>
                                </figure>
                            </div>
                            <div>
                                <figure>
                                    <img src='http://i.imgur.com/VNhQWda.jpg' />
                                <span>BT03</span>
                                </figure>
                            </div>
                            <div>
                                <figure>
                                    <img src='http://i.imgur.com/eX0mqYu.jpg' />
                                <span>BT04</span>
                                </figure>
                            </div>
                        </Slider>
                    </div>
                    <h3>Latest Foods</h3>
                    <div className="slider-container wines-container">
                        <Slider {...settings}>
                            <div>
                                <figure>
                                    <img src='http://i.imgur.com/2bN3saO.jpg' />
                                <span>ST01</span>
                                </figure>
                            </div>
                            <div>
                                <figure>
                                    <img src='http://i.imgur.com/OMhs0tb.jpg' />
                                <span>ST02</span>
                                </figure>
                            </div>
                            <div>
                                <figure>
                                    <img src='http://i.imgur.com/bxdoNzy.jpg' />
                                <span>ST03</span>
                                </figure>
                            </div>
                            <div>
                                <figure>
                                    <img src='http://i.imgur.com/VoJyXZ8.jpg' />
                                <span>ST04</span>
                                </figure>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}