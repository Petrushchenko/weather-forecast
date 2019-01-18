import React, { Component } from 'react';
import Tabs from './Tabs';
import Tab from './Tab';
import '../styles/display.css';
import { connect} from 'react-redux';


class Display extends Component {
    state ={
        activeTab: 0
    }
    changeActiveTab = (i) => () =>{
        this.setState({
            activeTab: i
        })
    }
    render () {
    const key = this.props.data ? Object.keys(this.props.data)[0] : null;
    const items = key ? this.props.data[key] : null;
    let st = this.props.status;
    let block = <div className="preloader">
                        <div className="spinner"></div>
                </div>;
    if(st === false) {
        if (key) {
            block = <div className="info">
                        <h2>Weather in {key}</h2>
                        <div>
                            <Tabs data = {items} 
                                activeTab = {this.state.activeTab} 
                                changeTab = {this.changeActiveTab}
                             />
                            <Tab data = {items[this.state.activeTab]}/>
                        </div>
                    </div>;
        } else {
           block =  <div className = "error">
                <p>city not found</p>
            </div>
        }
        
    }

    return(   
            <div className ="content">
                {block}

            </div>

        )
    }
}

export default connect((state) => ({data:state.weather.search, status:state.weather.status}))(Display);
