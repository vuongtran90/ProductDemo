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
                                </figure>
                            </div>
                            <div>
                                <figure>
                                    <img src='http://i.imgur.com/EGfySVL.jpg' />
                                </figure>
                            </div>
                            <div>
                                <figure>
                                    <img src='http://i.imgur.com/zMyW9bF.jpg' />
                                </figure>
                            </div>
                            <div>
                                <figure>
                                    <img src='http://i.imgur.com/DNHN7IO.jpg' />
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
                                </figure>
                            </div>
                            <div>
                                <figure>
                                    <img src='http://i.imgur.com/FL10kY5.jpg' />
                                </figure>
                            </div>
                            <div>
                                <figure>
                                    <img src='http://i.imgur.com/VNhQWda.jpg' />
                                </figure>
                            </div>
                            <div>
                                <figure>
                                    <img src='http://i.imgur.com/eX0mqYu.jpg' />
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
                                </figure>
                            </div>
                            <div>
                                <figure>
                                    <img src='http://i.imgur.com/OMhs0tb.jpg' />
                                </figure>
                            </div>
                            <div>
                                <figure>
                                    <img src='http://i.imgur.com/bxdoNzy.jpg' />
                                </figure>
                            </div>
                            <div>
                                <figure>
                                    <img src='http://i.imgur.com/VoJyXZ8.jpg' />
                                </figure>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}