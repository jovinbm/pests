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
                                Managing Director:Abel Juma Thomas
                                P.O BOX 712<br/>
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
                        <div className="row">
                            <div className="col-6">
                                <form method="post" action="">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleTextarea">Message</label>
                                        <textarea className="form-control" id="exampleTextarea" rows={3} defaultValue={""} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}