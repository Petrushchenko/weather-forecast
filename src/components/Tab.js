import React, {Component} from 'react';
import '../styles/tab.css';

class Tab extends Component {
    render(){
      
       const data = this.props.data.ranges.map((el, index) => 
            <div key = {index}>
                <img src={`http://openweathermap.org/img/w/${el.icon}.png`} alt=""></img>
                <span>{el.hour.slice(0, 5)}</span>
                <p>Temperature<br></br>{Math.round(el.temp)}ᵒC</p>
                <p>Humidity<br></br> {el.humidity}%</p>

            </div>
        )
        return (
            <div className = "weather">
                {data}
          
            </div>
            )
    }
}

export default Tab;