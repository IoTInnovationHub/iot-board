import React from 'react';
import ReactDOM from 'react-dom'
import Perso from './perso.js'
import Calendar from './calendar.js'
import Slack from './slack.js'
import Locker from './locker.js'
import './style.css'

class Board extends React.Component {
    render() {
	return (
	    <div>
	      <div className="col-md-4">
	      	<div className="tab-content">
	      	  <div role="tabpanel" id="perso-screen">
		    <Perso />
		    <Calendar />
		    <Slack />
		    <Locker />
	      	  </div>
	      	</div>
	      </div>
	      <div className="col-md-5">
		<div className="box text-center" id="map">
		  <img src={require("./img/map.png")} alt="hub-map"/>
		</div>
	      </div>
	    </div>
	);
    }
}

ReactDOM.render(
    <Board />,
    document.getElementById('root')
);
