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

const glasses = [
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

const foods = [
    {   
        id: 1,
        name: 'Apricot Jam',
        img: 'http://i.imgur.com/2bN3saO.jpg',
        description: 'This jam is made without pectin and the list of ingredients couldnt be simpler. You will need a very large pot to prepare this in, as the jam boils up double in size during the early stages of cooking.',
        price: '80'
    },
    {
        id: 2,
        name: 'Black Olives',
        img: 'http://i.imgur.com/zMyW9bF.jpg',
        description: 'The olive, known by the botanical name Olea europaea, meaning "european olive", is a species of small tree in the family Oleaceae, found in the Mediterranean Basin from Portugal to the Levant, the Arabian Peninsula, and southern Asia as far east as China, as well as the Canary Islands, Mauritius and Réunion',
        price: '60'
    },
    {
        id: 3,
        name: 'Chocolate',
        img: 'http://i.imgur.com/bxdoNzy.jpg',
        description: 'Chocolate is a typically sweet, usually brown food preparation of Theobroma cacao seeds, roasted and ground, and often flavored with vanilla',
        price: '50'
    },
    {
        id: 4,
        name: 'Green Olives',
        img: 'http://i.imgur.com/VoJyXZ8.jpg',
        description: 'The olives fruit, also called the olive, is of major agricultural importance in the Mediterranean region as the source of olive oil; it is one of the three core ingredients in Mediterranean cuisine',
        price: '100'
    },
    {
        id: 5,
        name: 'Honey',
        img: 'http://i.imgur.com/EB9aGkw.jpg',
        description: 'Is a sweet food made by bees foraging nectar from flowers. The variety produced by honey bees (the genus Apis) is the one most commonly referred to, as it is the type of honey collected by most beekeepers and consumed by people',
        price: '170'
    },
    {
        id: 6,
        name: 'Pesto',
        img: 'http://i.imgur.com/WSMSwBo.jpg',
        description: 'The name is the contracted past participle of the Genoese verb pestâ (Italian: pestare), which means to pound, to crush, in reference to the original method of preparation: according to tradition, the ingredients are "crushed" or ground in a marble mortar through a circular motion of a wooden pestle. This same Latin root, through Old French, also gave rise to the English noun pestle.',
        price: '120'
    },
    {
        id: 7,
        name: 'Rasberry',
        img: 'http://i.imgur.com/7o5wur9.jpg',
        description: 'Raspberry derives its name from raspise, a sweet rose-colored wine (mid-15th Century), from the Anglo-Latin, vinum raspeys, or from raspoie, meaning "thicket," of Germanic origin.[1] The name may have been influenced by its appearance as having a rough surface related to Old English rasp or rough berry',
        price: '60'
    },
    {
        id: 8,
        name: 'Strawberry',
        img: 'http://i.imgur.com/eDPLvyd.jpg',
        description: 'The first garden strawberry was grown in Brittany, France during the late 18th century.[3] Prior to this, wild strawberries and cultivated selections from wild strawberry species were the common source of the fruit',
        price: '50'
    },
];

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