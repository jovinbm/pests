/**
 * Created by programer on 3/31/17.
 */


import React from 'react';
import {Link,IndexLink} from 'react-router';




export default class NavigationComponent extends React.Component{


    constructor(){

        super();
    }


    render(){

        return(
            <nav className="navbar fixed-bottom navbar-toggleable-md navbar-inverse bg-inverse">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="container">
                    <a className="navbar-brand" href="#">AJ Investment</a>
                    <div className="collapse navbar-collapse" id="navbarExample">
                        <ul className="navbar-nav ml-auto">
                            <Link to='/' className="nav-item active">
                                <span className="nav-link" href="#">Home <span className="sr-only">(current)</span></span>
                            </Link>
                            <Link to='/about' className="nav-item">
                                <span className="nav-link" href="#">About</span>
                            </Link>
                            <Link to='/pests' className="nav-item">
                                <span className="nav-link" href="#">Pests</span>
                            </Link>
                            <Link to='/services' className="nav-item">
                                <span className="nav-link" href="#">Services</span>
                            </Link>
                            <Link to='/contacts' className="nav-item">
                                <span className="nav-link" href="#">Contact</span>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}