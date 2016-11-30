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
                <div className="row detail">
                    <div className="col-sm-6 col-md-6 detail-img">
                        <div className="thumbnail">
                            <img src={wine[0].img} alt={wine[0].name} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 detail-content">
                       <h1>{wine[0].name}</h1>
                       <ul className="detail-content-header">
                           <li><strong>Price</strong><br/><span>&#36;{wine[0].price}</span></li>
                       </ul>
                       <ul className="detail-description">
                           <li><strong>Description</strong><br/>{wine[0].description}</li>
                       </ul>
                        <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to wines</button>
                    </div>
                </div>
            </div>
        );
    }
}