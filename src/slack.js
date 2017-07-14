import React from 'react';

export default class Slack extends React.Component {
    render() {
	return (
	    <div className="col-md-12">
	      <div className="box jumbotron text-center" id="message">
		<h3><b>MES MESSAGES</b></h3>
		<table style={{width: 100 + '%', textAlign: 'left'}}>
		  <tr>
		    <td><h4>from <b>@schwarzy</b></h4><h5><b>@everyone</b> qq a t'il pris une rasp qui trainait dans la bibliothèque ?</h5></td>
		    <td><h4 className="text-center">5min</h4></td>
		  </tr>

		  <tr>
		    <td><h4>from <b>@pm_blackfoot</b></h4><h5><b>@everyone</b> tournage et itw pour marie claire</h5></td>
		    <td><h4 className="text-center">1h</h4></td>
		  </tr>

		  <tr>
		    <td><h4>from <b>@pm_blackfoot</b></h4><h5><b>@everyone</b> il me faut absolument hexapod et horyus cette aprem</h5></td>
		    <td><h4 className="text-center">Hier</h4></td>
		  </tr>

		  <tr>
		    <td><h4>from <b>@nelly</b></h4><h5>Hello <b>@user!</b> Est-ce que t'aurais une Raspberry à me dépanner stp ?</h5></td>
		    <td><h4 className="text-center">Hier</h4></td>
		  </tr>
		</table>
	      </div>
	    </div>
	);
    }
}
