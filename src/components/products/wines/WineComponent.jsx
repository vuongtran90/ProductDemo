import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Wine extends Component {
    render(){
        // Get data from route props
        const wines = this.props.route.wines;
        // Map through wines and return linked wines
        const wineNode = wines.map((wine) => {
            return (
                <Link
                    to={"/wines/"+wine.id}
                    className="col-md-4"
                    key={wine.id}>
                    <div className="list-group-item wine-item">
                        <figure>
                            <img src={wine.img} alt={wine.name} />
                        </figure>
                        <span className="name">{wine.name}</span>
                        <span className="price">&#36;{wine.price}</span>
                    </div>
                </Link>
            )
        });
        return (
            <div className="grid">
                <div className="list-group">
                    {wineNode}
                </div>
            </div>
        );
    }
}