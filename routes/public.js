/**
 * Created by programer on 4/6/17.
 */

import express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import {Route,IndexRoute,hashHistory,browserHistory} from 'react-router'
import MainComponent from '../components/MainComponent';
import Homecomponent from '../components/HomeComponent';
import ProfileComponent from '../components/ProfileComponent';
import PestsComponent from '../components/PestsComponent';
import ServiceComponent from '../components/ServiceComponent';
import ContactComponent from '../components/ContactComponent';
import PestComponent from '../components/PestComponent';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '../reducers/index';
import Routes from './ReactRoutes';





let Router=express.Router();


Router.get("*",(req,res)=>{


    match({routes:Routes,location:req.url},(err,redirect,props)=>{

        if(props){
            const store=createStore(
                rootReducer
            );

            const preloadedState = store.getState();


            let html=ReactDomServer.renderToString(
                <Provider store={store}>
                    <RouterContext {...props}/>
                </Provider>
            );
            res.render('index',{app:html,preloadedState:preloadedState});

        }else{
            res.status(404).send("Not found");
        }

    });


});


module.exports=Router;