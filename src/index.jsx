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

const wines = [
    {   
        id: 1,
        name: 'Bug Eye Sunglasses',
        img: 'http://i.imgur.com/kbwVKgs.jpg',
        description: 'Single Vision Lenses, Anti-Scratch Coating, Protective Case, Microfiber Cleaning Cloth',
        frame: 'Full',
        shape: 'Wayfarer',
        gender: 'Women',
        price: '580'
    },
    {
        id: 8,
        name: 'Clark Kent Glasses',
        img: 'http://i.imgur.com/EGfySVL.jpg',
        description: 'Single Vision Lenses, Anti-Scratch Coating, Protective Case, Microfiber Cleaning Cloth',
        frame: 'Full',
        shape: 'Wayfarer',
        gender: 'Women',
        price: '350'
    },
    {
        id: 2,
        name: 'Eye Glasses M01',
        img: 'http://i.imgur.com/zMyW9bF.jpg',
        description: 'Single Vision Lenses, Anti-Scratch Coating, Protective Case, Microfiber Cleaning Cloth',
        frame: 'Full',
        shape: 'Wayfarer',
        gender: 'Women',
        price: '220'
    },
    {
        id: 3,
        name: 'Glasses H01',
        img: 'http://i.imgur.com/DNHN7IO.jpg',
        description: 'Single Vision Lenses, Anti-Scratch Coating, Protective Case, Microfiber Cleaning Cloth',
        frame: 'Full',
        shape: 'Wayfarer',
        gender: 'Women',
        price: '450'
    },
    {
        id: 4,
        name: 'Glasses L01',
        img: 'http://i.imgur.com/QjnitsC.jpg',
        description: 'Single Vision Lenses, Anti-Scratch Coating, Protective Case, Microfiber Cleaning Cloth',
        frame: 'Full',
        shape: 'Wayfarer',
        gender: 'Women',
        price: '278'
    },
    {
        id: 5,
        name: 'Glasses T01',
        img: 'http://i.imgur.com/zMyW9bF.jpg',
        description: 'Single Vision Lenses, Anti-Scratch Coating, Protective Case, Microfiber Cleaning Cloth',
        frame: 'Full',
        shape: 'Wayfarer',
        gender: 'Women',
        price: '340'
    },
    {
        id: 6,
        name: 'Glasses W01',
        img: 'http://i.imgur.com/U26LNtn.jpg',
        description: 'Single Vision Lenses, Anti-Scratch Coating, Protective Case, Microfiber Cleaning Cloth',
        frame: 'Full',
        shape: 'Wayfarer',
        gender: 'Women',
        price: '340'
    },
    {
        id: 7,
        name: 'Vintage Sunglasses',
        img: 'http://i.imgur.com/dDRhgLB.jpg',
        description: 'Single Vision Lenses, Anti-Scratch Coating, Protective Case, Microfiber Cleaning Cloth',
        frame: 'Full',
        shape: 'Wayfarer',
        gender: 'Women',
        price: '430'
    },
];

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