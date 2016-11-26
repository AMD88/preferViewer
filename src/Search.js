/**
 * Created by vibodha on 11/26/16.
 */

import React,{Component} from 'react';

export default class Search extends Component{
    render(){
        return (
            <form className="navbar-form navbar-left">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search"></input>
                    <div className="input-group-btn">
                        <button className="btn btn-default" type="submit">
                            <i className="glyphicon glyphicon-search"></i>
                        </button>
                    </div>
            </div>
            </form>
        );
    }
}

