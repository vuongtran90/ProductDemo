import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Food extends Component {
    render(){
        // Get data from route props
        const foods = this.props.route.foods;
        // Map through foods and return linked foods
        const foodNode = foods.map((food) => {
            return (
                <Link
                    to={"/foods/"+food.id}
                    className="col-md-4"
                    key={food.id}>
                    <div className="list-group-item food-item">
                        <figure>
                            <img src={food.img} alt={food.name} />
                        </figure>
                        <span className="name">{food.name}</span>
                        <span className="price">&#36;{food.price}</span>
                    </div>
                </Link>
            )
        });
        return (
            <div className="grid">
                <div className="list-group">
                    {foodNode}
                </div>
            </div>
        );
    }
}