/**
 * Created by programer on 3/31/17.
 */

import React from 'react';




export default class CarouselComponent extends React.Component{


    constructor(){

        super()
    }


    render(){

        return(
            <div id="carousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
                    <li data-target="#carousel-example-generic" data-slide-to={1} />
                    <li data-target="#carousel-example-generic" data-slide-to={2} />
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img src="images/danaus-1188361_1280.jpg" alt="First slide" height={300} width={700}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Larvae one of the destcructive plant pests that we deal with</h3>
                            <p>Call us and lets clear your problem</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/fruit-flies-520905_1280.jpg" alt="Second slide" height={300} width={700}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>FruitFlies Destroying Plant fruit  </h3>
                            <p>With us there this problem will be a thing of the past</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/housefly-1122462_1280.jpg" alt="Third slide" height={300} width={700}/>
                        <div className="carousel-caption d-none d-md-block">
                           <h3>Tsetse Flies Are Both harmful to humans and livestock</h3>
                           <p>No worries we deal with these too</p>
                        </div>
                    </div>
                </div>
                <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <span className="icon-prev" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                    <span className="icon-next" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}
