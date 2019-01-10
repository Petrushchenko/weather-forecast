import React, { Component} from 'react';

class Tabs extends Component {
    render() {
        return (
              <ul className="tabs">
                   {
                    this.props.data.map((item, i) => <li 
                        key={i} 
                        className={this.props.activeTab === i ? "active" : null } 
                        onClick = {this.props.changeTab(i)}>
                        <p>{item.date}</p>
                        {item.temp_min} {item.temp_max}
                        </li>)
                  }
               </ul>
            )
    }
}

export default Tabs;