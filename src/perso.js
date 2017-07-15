import React from 'react';

export default class Perso extends React.Component {
    render() {
	return (
	    <div className="col-md-12">
	      <div className="box jumbotron" id="who">
	      	<div className="photo">
	      	<img src={require('./img/hub.png')} style={{width: "100%"}}/>
	      	</div>
	      </div>
	    </div>
	);
    }
}
