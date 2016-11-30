import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Home from './components/common/HomeComponent.jsx';
import Main from './components/common/MainComponent.jsx';

import Glass from './components/products/glasses/GlassComponent.jsx';
import GlassDetail from './components/products/glasses/GlassDetailComponent.jsx';

import Wine from './components/products/wines/WineComponent.jsx';
import WineDetail from './components/products/wines/WineDetailComponent.jsx';

import Food from './components/products/foods/FoodComponent.jsx';
import FoodDetail from './components/products/foods/FoodDetailComponent.jsx';

const glasses = require('./data/glasses.json');
const wines = require('./data/wines.json');
const foods = require('./data/foods.json');

render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
             {/* Glass route*/}
            <Route path="/glasses" component={Glass} glasses={glasses}/>
            <Route path="/glasses/:id" component={GlassDetail} glasses={glasses}/>
            {/* Wine route*/}
            <Route path="/wines" component={Wine} wines={wines}/>
            <Route path="/wines/:id" component={WineDetail} wines={wines}/>
            {/* Food route*/}            
            <Route path="/foods" component={Food} foods={foods}/>
            <Route path="/foods/:id" component={FoodDetail} foods={foods}/>
        </Route>
    </Router>,
    document.getElementById('container')
);