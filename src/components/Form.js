import React, { Component} from 'react';
import { connect} from 'react-redux';
import { fetchWeather } from '../reducers/weather';
import '../styles/form.css';

class Form extends Component {
    state = {
        city: ''
    }
    currentLocation = () => {
        fetch('https://ipapi.co/json/').then( 
            res => res.json()
            ).then(data => {
                this.setState({
                    city: data.city
                });
            })
    }
    changeInput =(ev) => {
        this.setState({
            city: ev.target.value
        })
    }
    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.fetchWeather(this.state.city)
    }
    
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <div>
                    <input type="search" 
                           placeholder="Your city" 
                           value = {this.state.city}
                           onChange = {this.changeInput}/>
                    <button > Search </button>
                </div>
                <div>
                    <button type="button" onClick={this.currentLocation}>Current Location</button>
                </div>
            </form>
        )
    }
}

export default connect(null, {fetchWeather})(Form)