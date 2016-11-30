import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class GlassDetail extends Component {
    handleRedirect(){
        browserHistory.push('/glasses');
    }
    render(){
        const glasses = this.props.route.glasses;
        const id = this.props.params.id;
        const glass = glasses.filter(glass => {
            if(glass.id == id) {
                return glass;
            }
        });

        return (
            <div>
                <div className="row detail">
                    <div className="col-sm-6 col-md-6 detail-img">
                        <div className="thumbnail">
                            <img src={glass[0].img} alt={glass[0].name} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 detail-content">
                       <h1>{glass[0].name}</h1>
                       <ul className="detail-content-header">
                           <li><strong>Frame</strong><br/><span>{glass[0].frame}</span></li>
                           <li><strong>Shape</strong><br/><span>{glass[0].shape}</span></li>
                           <li><strong>Gender</strong><br/><span>{glass[0].gender}</span></li>
                           <li><strong>Price</strong><br/><span>${glass[0].price}</span></li>
                       </ul>
                       <ul className="detail-description">
                           <li><strong>Description</strong><br/>{glass[0].description}</li>
                       </ul>
                        <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to glasses</button>
                    </div>
                </div>
            </div>
        );
    }
}