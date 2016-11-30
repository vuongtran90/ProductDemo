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
                <div className="row detail">
                    <div className="col-sm-6 col-md-6 detail-img">
                        <div className="thumbnail">
                            <img src={food[0].img} alt={food[0].name} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 detail-content">
                       <h1>{food[0].name}</h1>
                       <ul className="detail-content-header">
                           <li><strong>Price</strong><br/><span>${food[0].price}</span></li>
                       </ul>
                       <ul className="detail-description">
                           <li><strong>Description</strong><br/>{food[0].description}</li>
                       </ul>
                        <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to foodes</button>
                    </div>
                </div>
            </div>
        );
    }
}