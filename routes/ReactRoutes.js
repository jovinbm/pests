/**
 * Created by programer on 2/3/17.
 */

import {Route,IndexRoute,hashHistory,browserHistory} from 'react-router'
import MainComponent from '../components/MainComponent';
import Homecomponent from '../components/HomeComponent';
import ProfileComponent from '../components/ProfileComponent';
import PestsComponent from '../components/PestsComponent';
import ServiceComponent from '../components/ServiceComponent';
import ContactComponent from '../components/ContactComponent';
import React from 'react';
import PestComponent from '../components/PestComponent';



module.exports=(
        <Route component={MainComponent}>
            <Route  path="/" component={Homecomponent}/>
            <Route  path="/about" component={ProfileComponent}/>
            <Route path='/pests' component={PestsComponent}>
                <Route path='(:id)' component={PestComponent}/>
            </Route>
            <Route path='/services' component={ServiceComponent}/>
            <Route path='/contacts' component={ContactComponent}/>
        </Route>
);