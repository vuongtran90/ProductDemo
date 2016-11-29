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
                    className="list-group-item"
                    key={food.id}>
                    {food.name}
                </Link>
            )
        });
        return (
            <div>
                <h1>foods page</h1>
                <div className="list-group">
                    {foodNode}
                </div>
            </div>
        );
    }
}