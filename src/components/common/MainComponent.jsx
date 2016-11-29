import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Main extends Component {
    render(){
        return(
            <div>
                <nav className="navbar ">
                    <ul className="nav">
                        {/* Change from a to Link */}
                        <li><Link to="/" activeClassName="active" className="logo">PRODUCT</Link></li>
                        <li>Categories
                            <ul className="dropDownList">
                                <li>
                                    <Link to="/glasses" activeClassName="active">Glasses</Link>
                                </li>
                                <li>
                                    <Link to="/wines" activeClassName="active">Wines</Link>
                                </li>
                                <li>
                                    <Link to="/foods" activeClassName="active">Food</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className="main-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}