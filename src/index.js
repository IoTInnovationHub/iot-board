import React from 'react';
import ReactDOM from 'react-dom'
import Perso from './perso.js'
import Calendar from './calendar.js'
import Slack from './slack.js'
import Locker from './locker.js'
import Rooms from './rooms.js'
import Map from './map.js'
import Users from './users.js'
import './style.css'

class Board extends React.Component {
  constructor()
  {
    super();
    this.state = {renderedElements:[], index:0};
    this.samples = [<Users/>, <Rooms/>];
    setInterval(function()
	{
	  this.update();
	}.bind(this), 10000)
  }

    componentDidMount(){
	this.update();
    }

  update()
  {
    this.state.index++;
    if (this.state.index >= this.samples.length)
      this.state.index = 0;
    this.setState({renderedElements: this.samples[this.state.index]})
    return (this.state.renderedElements);
  }
    render() {
	return (
	    <div>
	      <div className="col-md-4">
	      	<div className="tab-content">
	      	  <div role="tabpanel" id="perso-screen">
		    <Perso />
		    <Calendar />
		    <Slack />
	      	  </div>
	      	</div>
		</div>
		<div className="col-md-5">
		<Map />
		</div>
		<div className="col-md-3">
		{this.state.renderedElements}
		</div>
	    </div>
	);
    }
}

ReactDOM.render(
    <Board />,
    document.getElementById('root')
);
