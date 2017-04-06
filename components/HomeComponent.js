/**
 * Created by programer on 3/31/17.
 */


import React from 'react';
import PestsSliderComponent from './PestsSliderComponent';
import CarouselComponent from './CarouselComponent';




export default class HomeComponent extends React.Component{

    constructor(){
        super();
    }

    componentDidMount(){

    }

    render(){

        return(
            <div>
                <div className="row">
                    <div className="col-lg-6" style={{color: '#ffffff'}}>
                        <a className="navbar-brand" href="#">
                            <img src="images/logo.png" width={94} height={88} />
                        </a>
                        <h1 className="mt-5"><span className="firstcharacter">AJ.M</span> Investment &amp; General Pest Control LTD</h1>
                        <p className="text-center">
                            Pest control treatment against cockroaches, rodents, bees, flies, mosquitoes, snakes, bed bugs and ticks
                            Sale of public health pesticides and agrochemicals
                            Sale of personal protective/safety equipment and application equipment
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <CarouselComponent/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <PestsSliderComponent/>
                    </div>
                </div>
            </div>
        )
    }
}