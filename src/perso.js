import React from 'react';

export default class Perso extends React.Component {
    render() {
	return (
	    <div className="col-md-12">
	      <div className="box jumbotron" id="who">
	      	<div className="photo">
	      	  <img src={require('./img/felix.png')}
		       alt="swag" />
	      	</div>
	      	<div className="info">
	      	  <h3><b>Felix</b></h3>
	      	  <h4>Astek - 3ème année</h4>
	      	</div>
	      </div>
	    </div>
	);
    }
}
