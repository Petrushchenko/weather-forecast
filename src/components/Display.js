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
    const key = Object.keys(this.props.data)[0];
    const items = this.props.data[key];
    //console.log(key, items)

        return(
            <div className ="content">
                <h2>Weather in {key}</h2>
                <div>
                    <Tabs data = {items} 
                        activeTab = {this.state.activeTab} 
                        changeTab = {this.changeActiveTab}
                     />
                    <Tab data = {items[this.state.activeTab]}/>
                </div>
            </div>
            )
    }
}

export default connect((state) => ({data:state.weather.search}))(Display);
