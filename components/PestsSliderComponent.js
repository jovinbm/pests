/**
 * Created by programer on 4/1/17.
 */


import React from 'react';
import Slider from 'react-slick';



export default class PestsSliderComponent extends React.Component{

    constructor(){
        super();
    }

    render(){
        return(
            <div className="row pestsSlider">
                <div className="container">
                    <div className="row pestsheader">
                        <div className="col-12 dd text-center">
                            <span className="">Some Destructive Pests We deal With</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src="images/pest1.png" />
                        <div className="caption">
                            <div className="txt1">wasps</div>
                            <div className="txt2">A wasp is any insect of the order Hymenoptera and suborder Apocrita.</div>
                        </div>
                    </div>
                    <div className="col">
                        <img src="images/pest2.png" />
                        <div className="caption">
                            <div className="txt1">Flies</div>
                            <div className="txt2">True flies are insects of the order Diptera</div>
                        </div>
                    </div>
                    <div className="col">
                        <img src="images/pest3.png" />
                        <div className="caption">
                            <div className="txt1">cockroaches</div>
                            <div className="txt2">Cockroaches are insects of the order Blattodea</div>
                        </div>
                    </div>
                    <div className="col">
                        <img src="images/pest4.png" />
                        <div className="caption">
                            <div className="txt1">fleas</div>
                            <div className="txt2">Fleas are small flightless insects that form the order Siphonaptera</div>
                        </div>
                    </div>
                    <div className="col">
                        <img src="images/pest5.png" />
                        <div className="caption">
                            <div className="txt1">spiders</div>
                            <div className="txt2">Spiders (order Araneae) are air-breathing arthropods</div>
                        </div>
                    </div>
                    <div className="col">
                        <img src="images/pest6.png" />
                        <div className="caption">
                            <div className="txt1">rats</div>
                            <div className="txt2">Rats are various medium-sized, long-tailed rodents of the superfamily Muroidea.</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
