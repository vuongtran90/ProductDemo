import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Glass extends Component {
    getGlass(){
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve(glasses);
            }, 1000);
        });
    }
    render(){
        console.log(glasses)
        // Get data from route props
        const glasses = this.props.route.glasses;
        // Map through glasses and return linked glasses
        const glassNode = glasses.map((glass) => {
            return (
                <Link
                    to={"/glasses/"+glass.id}
                    className="col-md-4"
                    key={glass.id}>
                    <div className="list-group-item">
                        <figure>
                            <img src={glass.img} alt={glass.name} />
                        </figure>
                        <span className="name">{glass.name}</span>
                        <span className="price">${glass.price}</span>
                    </div>
                </Link>
            )
        });
        return (
            <div className="grid">
                <div className="list-group">
                    {glassNode}
                </div>
            </div>
        );
    }
}