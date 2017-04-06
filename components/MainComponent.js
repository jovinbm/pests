import React from 'react';
import NavigationComponent from './NavigationComponent';



export default class MainComponent extends React.Component{


    constructor(){
        super();
    }

    render(){

        return(
            <div>
                <div className="main">
                    <section className="body">
                        <NavigationComponent/>
                        <section>
                            <div className="container">
                                {this.props.children}
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        )
    }
}