import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class FoodDetail extends Component {
    handleRedirect(){
        browserHistory.push('/foods');
    }
    render(){
        const foods = this.props.route.foods;
        const id = this.props.params.id;
        const food = foods.filter(food => {
            if(food.id == id) {
                return food;
            }
        });

        return (
            <div>
                <h1>{food[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={food[0].img} alt={food[0].name} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                           <li><strong>Description</strong>: {food[0].description}</li>
                           <li><strong>Price</strong>: {food[0].price}</li>
                       </ul>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to foods</button>
                    </div>
                </div>
            </div>
        );
    }
}