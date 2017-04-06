/**
 * Created by programer on 4/2/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';





class PestsComponent extends React.Component{


    constructor(){

        super();

        this.getPests=this.getPests.bind(this);
    }

    getPests(){

            return this.props.pests.map((x,index)=>{
                console.log(index==this.props.params.id);
                return(
                    <div key={x.pest} className={`col-lg-3 pestimage`+`${index==this.props.params.id?' hideElement':''}`}>
                        <Link to={`/pests/${index}/`}>
                            <img src={`/images/${x.url}`}/>
                        </Link>
                    </div>
                );
            });

    }


    render(){

        let mobiledata=this.props.pests.map((x,index)=>{

            return(
                <div className="row hidden-md-up" key={x.pest}>
                    <div className="col-lg-12">
                        <p>
                            Pests are any harmful agents of biotic nature. Pests eat & contaminate our food,
                            destroy our properties, spread disease and destruct our precious environment
                        </p>
                    </div>
                    <div  className='col-xs-4 col-sm-4 col-md-4 pestimage'>
                        <h2>{x.pest}</h2>
                        <img src={`images/${x.url}`}/>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4">
                        <p className="pestDescription">
                            {x.description}
                        </p>
                    </div>
                </div>
            )
        });


        return(
            <div className="pests2">
                <div className="row hidden-md-down">
                    <div className="col-lg-7">
                        <p>
                            Pests are any harmful agents of biotic nature. Pests eat & contaminate our food,
                            destroy our properties, spread disease and destruct our precious environment
                        </p>
                    </div>
                    {this.props.children}
                </div>
                <div className="row hidden-md-down">
                    {this.getPests()}
                </div>
                {mobiledata}
            </div>
        )
    }
}


function mapStateToProps(state) {

    return{
        pests:state.pests
    };
}

export default connect(mapStateToProps)(PestsComponent);