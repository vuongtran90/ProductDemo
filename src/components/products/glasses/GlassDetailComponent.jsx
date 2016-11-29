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
                <h1>{glass[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={glass[0].img} alt={glass[0].name} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                           <li><strong>Description</strong>: {glass[0].description}</li>
                           <li><strong>Frame</strong>: {glass[0].frame}</li>
                           <li><strong>Shape</strong>: {glass[0].shape}</li>
                           <li><strong>Gender</strong>: {glass[0].gender}</li>
                           <li><strong>Price</strong>: {glass[0].price}</li>
                       </ul>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to glasses</button>
                    </div>
                </div>
            </div>
        );
    }
}