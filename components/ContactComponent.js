/**
 * Created by programer on 4/2/17.
 */
import React from 'react';





export  default class ContactComponent extends React.Component{


    constructor(){

        super();
    }


    render(){

        return(
            <div className="pests">
                <h2>Contacts</h2>
                <div className="container">
                    <div className="contact">
                        <div className="row">
                            <div className="col">
                                <span>AJ MABAO INVESTMENT & GENERAL PEST CONTROL LTD</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <span>
                                Director:Abel Juma Mabao
                                P.O BOX 637<br/>
                                Clinic Road<br/>
                                Kahama,Shinyanga
                            </span>
                            </div>
                            <div className="col">
                                Phone<br/>
                                +255754433161<br/>
                                +255786433161<br/>
                                Email:mabao.investment@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}