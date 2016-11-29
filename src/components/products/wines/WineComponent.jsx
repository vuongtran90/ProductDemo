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
                    className="list-group-item"
                    key={wine.id}>
                    {wine.name}
                </Link>
            )
        });
        return (
            <div>
                <h1>wines page</h1>
                <div className="list-group">
                    {wineNode}
                </div>
            </div>
        );
    }
}