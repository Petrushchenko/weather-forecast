import React, {Component} from 'react';
import '../styles/tab.css';

class Tab extends Component {
    render(){
      // console.log(this.props.data.ranges)
       const data = this.props.data.ranges.map((el, index) => 
            <div key = {index}>
                <img src={`http://openweathermap.org/img/w/${el.icon}.png`} alt=""></img>
                <span>{el.hour}</span>
                <p>Temperature {el.temp}</p>
                <p>Humidity {el.humidity}</p>

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