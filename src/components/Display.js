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
    const items = this.props.data;
    console.log(items)

        return(
            <div className ="content">
                <Tabs data = {items} 
                    activeTab = {this.state.activeTab} 
                    changeTab = {this.changeActiveTab}
                 />
                <Tab data = {items[this.state.activeTab]}/>
            </div>
            )
    }
}

export default connect((state) => ({data:state.weather.search}))(Display);
