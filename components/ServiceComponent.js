/**
 * Created by programer on 4/2/17.
 */
import React from 'react';





export  default class ServiceComponent extends React.Component{


    constructor(){

        super();
    }


    render(){

        return(
            <div className="pests">
                <div className="row serviceDescription">
                    <div className="col-lg-6 col-sm-12 col-xs-12">
                        <h3>Services</h3>
                        <ul>
                            <li>Malaria Vector Control especially elimination of mosquitoes transmission of malaria</li>
                            <li>Bees removal in unwanted areas</li>
                            <li>Pest control treatment against cockroaches, rodents, bees, flies, mosquitoes, snakes, bed bugs and ticks</li>
                            <li>Sale of public health pesticides and agrochemicals</li>

                            <li>Sale of personal protective/safety equipment and application equipment</li>

                            <li>Soil sterilization services to control termites</li>

                            <li>Pests control consultancy and training</li>

                            <li>Pre and post harvest crop protection</li>
                        </ul>
                        <h4>SERVICE DELIVERY & AFTER TREATMENT SERVICE</h4>
                        <p>
                            Communication is a vital component of our value chain.  Once with us, we will explain everything starting with how you should prepare to make the job a success, how long to vacate the premises; what to do with non target species; the procedures we will use; type of chemicals, precautions to take, what can realistically be expected from our treatment and what can not

                            Our technicians will be making routine visits to reinforce control measures. We will respond immediately to emergency call outs. We will provide you our client's hotline number, This number is reachable from 7 am to 10 pm everyday

                            Our company has the capacity to provide value added advice on other preventive measures such as advice on proofing, housekeeping, storage, waste disposal, cleaning and detection and monitoring of pest populations

                        </p>
                    </div>
                    <div className="co-4 offset-2 hidden-sm-down">
                        <div className="col-2">
                            <img src="images/chemicals.png" className="" width={150} height={150}/>
                        </div>
                        <div className="col-2">
                            <img src="images/chemicals2.jpg" className="" width={150} height={150}/>
                        </div>
                        <div className="col-2">
                            <img src="images/chemical3.jpg" className="" width={150} height={150}/>
                        </div>
                        <div className="col-2">
                            <img src="images/pestcontrol.jpg" className="" width={150} height={150}/>
                        </div>
                        <div className="col-2">
                            <img src="images/soil.jpg" className="" width={150} height={150}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}