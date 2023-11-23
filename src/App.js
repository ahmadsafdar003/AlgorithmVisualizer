import React, {Component} from 'react';

import {HashRouter as Router, Switch, Route} from 'react-router-dom';

import Home from "./homeComponents/home";

import Sort from "./sortComponents/sort";

import BinarySearch from "./binarySearchComponent/binarySearch";
import RecursiveSort from "./recursiveSortComponents/recursiveSort";


import TuringMachine from "./Turing Machine/turingMachine";




class App extends Component {
   

    constructor() {
        super();
    }
    componentDidMount() {
        // console.log(window.innerHeight,"  ",window.innerWidth);
        console.log(process.env.NODE_OPTIONS);
    }

    render() {
        return (
            <Router basename='/'>
                <Switch> 
                    <Route path='/sort' component={Sort}/>
                    <Route path='/recursivesort' component={RecursiveSort}/>
                    <Route path='/turing' component={TuringMachine}/>
                    <Route path='/' component={Home}/>

                </Switch>
            </Router>
        );
    }
}

export default App;
