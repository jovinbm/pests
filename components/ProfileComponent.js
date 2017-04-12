import React from 'react';




export default class ProfileComponent extends React.Component{


    constructor(){
        super();
    }


    render(){

        return(
            <div>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-lg-12">
                                <a className="navbar-brand" href="#">
                                    <img src="images/logo.png" width={94} height={88} />
                                </a>
                            </div>
                        </div>
                        <div className="row prevention">
                            <div className="col-lg-12">
                                <img src="images/prevention.jpg" className="img-thumbnail"/>
                            </div>
                        </div>
                    </div>

                    <div className="col about">
                        <p>
                            AJ MABAO INVESTMENT & GENERAL PEST CONTROL LTD is a registered company in the United Republic of Tanzania.
                            We deal with malaria vectors and other pests control and related services.
                            We are a progressive dynamic company that always seeks to improve and progress. We constantly adapt and realign to;
                        </p>
                        <ul>
                            <li>
                                Your current and future needs
                            </li>
                            <li>
                                New chemical and environmental protocols, laws and regulations
                            </li>
                            <li>
                                Technology and chemicals innovation
                            </li>
                            <li>
                                Market needs and market players
                            </li>
                        </ul>
                        <p>
                            We hope that through self regulation, we will pioneer high professionalism in this industry.
                            This will increase confidence and better perception from the public.
                            To us, customer service delivery entails careful design and execution of a whole system of
                            activities that include good organization, advanced technology and highly trained staff.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}