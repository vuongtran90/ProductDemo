import React, { Component } from 'react';
import { Link } from 'react-router';

class Product extends Component {
    render(){
        // Get data from route props
        const products = this.props.route.glasses;
        // Map through products and return linked products
        const productNode = products.map((product) => {
            return (
                <Link
                    to={"/products/"+product.id}
                    className="list-group-item"
                    key={product.id}>
                    {product.name}
                </Link>
            )
        });
        return (
            <div>
                <h1>products page</h1>
                <div className="list-group">
                    {productNode}
                </div>
            </div>
        );
    }
}

export default Product