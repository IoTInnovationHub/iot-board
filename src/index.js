import React from 'react';
import ReactDOM from 'react-dom'
import Perso from './perso.js'
import Calendar from './calendar.js'
import Slack from './slack.js'
import Locker from './locker.js'
import './style.css'
import './canvas.js'

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
		    <canvas id="canvas" width="500" height="1000">
		      Sorry, your browser doesn't support the &lt;canvas&gt; element.
		    </canvas>
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
