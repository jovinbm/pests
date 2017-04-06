/**
 * Created by programer on 4/2/17.
 */


import React from 'react';
import {connect} from 'react-redux';


class PestComponent extends React.Component{


    constructor(){

        super();
    }

    render(){

        return(
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>{this.props.pests[this.props.params.id].pest}</h2>
                        <img src={`/images/${this.props.pests[this.props.params.id].url}`}/>
                    </div>
                    <div className="col-lg-6">
                        <p className="pestDescription">
                            {this.props.pests[this.props.params.id].description}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {

    return{
        pests:state.pests
    }
}


export default connect(mapStateToProps)(PestComponent)