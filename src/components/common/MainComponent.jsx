import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Main extends Component {
    render(){
        return(
            <div>
                <nav className="navbar ">
                    <ul className="nav">
                        <li><Link to="/" activeClassName="active" className="logo">PRODUCT</Link></li>
                        <li className="category-dropdown">Categories
                            <ul className="drop-down-list">
                                <li>
                                    <Link to="/glasses" activeClassName="active">
                                        <img src="http://i.imgur.com/kbwVKgs.jpg" />
                                            Glasses
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/wines" activeClassName="active">
                                        <img src="http://i.imgur.com/eF9NITR.jpg" />
                                            Wines
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/foods" activeClassName="active">
                                        <img src="http://i.imgur.com/AMdmlLY.png" />
                                            Food
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}