import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Glass extends Component {
    render(){
        // Get data from route props
        const glasses = this.props.route.glasses;
        // Map through glasses and return linked glasses
        const glassNode = glasses.map((glass) => {
            return (
                <Link
                    to={"/glasses/"+glass.id}
                    className="list-group-item"
                    key={glass.id}>
                    {glass.name}
                    <img src={glass.img} alt={glass.name} />
                    {glass.price}
                </Link>
            )
        });
        return (
            <div className="inner-container">
                <div className="aside">
                    <img src="http://i.imgur.com/imC1T9G.jpg" alt="glass Image"></img>
                </div>
                <div className="list-group">
                    {glassNode}
                </div>
            </div>
        );
    }
}