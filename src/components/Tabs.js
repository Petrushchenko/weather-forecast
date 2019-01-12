import React, { Component} from 'react';

class Tabs extends Component {
    render() {
        return (
              <ul className="tabs">
                   {
                    this.props.data.map((item, i) => 
                      <li key={i} 
                          className={this.props.activeTab === i ? "active" : null } 
                          onClick = {this.props.changeTab(i)}>
                        <p>{item.date}</p>
                        <div>
                          <span>
                            <p>min</p>
                            <p>{Math.floor(item.temp_min)}ᵒC</p>
                          </span>
                          <span>
                            <p>max</p>
                            <p>{Math.floor(item.temp_max)}ᵒC</p>
                          </span>
                        </div>
                      </li>)
                  }
               </ul>
            )
    }
}

export default Tabs;