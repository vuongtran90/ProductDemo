import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class ProductDetail extends Component {
    handleRedirect(){
        browserHistory.push('/products');
    }
    render(){
        const products = this.props.route.glasses;
        const id = this.props.params.id;
        const product = products.filter(product => {
            if(product.id == id) {
                return product;
            }
        });

        return (
            <div>
                <h1>{product[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={product[0].img} alt={product[0].name} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                           <li><strong>Description</strong>: {product[0].description}</li>
                           <li><strong>Frame</strong>: {product[0].frame}</li>
                           <li><strong>Shape</strong>: {product[0].shape}</li>
                           <li><strong>Gender</strong>: {product[0].gender}</li>
                           <li><strong>Price</strong>: {product[0].price}</li>
                       </ul>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to products</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetail