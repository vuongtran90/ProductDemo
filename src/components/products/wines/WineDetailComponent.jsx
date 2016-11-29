import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class WinDetail extends Component {
    handleRedirect(){
        browserHistory.push('/wines');
    }
    render(){
        const wines = this.props.route.wines;
        const id = this.props.params.id;
        const wine = wines.filter(wine => {
            if(wine.id == id) {
                return wine;
            }
        });

        return (
            <div>
                <h1>{wine[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={wine[0].img} alt={wine[0].name} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                           <li><strong>Description</strong>: {wine[0].description}</li>
                           <li><strong>Frame</strong>: {wine[0].frame}</li>
                           <li><strong>Shape</strong>: {wine[0].shape}</li>
                           <li><strong>Gender</strong>: {wine[0].gender}</li>
                           <li><strong>Price</strong>: {wine[0].price}</li>
                       </ul>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to wines</button>
                    </div>
                </div>
            </div>
        );
    }
}