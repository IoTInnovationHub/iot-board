import React from 'react';

export default class Rooms extends React.Component {
    render() {
	return (
	    <div className="col-md-12">
	      <div className="box jumbotron text-center" id="rooms">
		<h3><b>Rooms Informations</b></h3>
		
		<table style={{width: 100 + '%', textAlign: 'left'}}>
		  <tr>
		    <td><h4>Faire l'inventaire du matos</h4></td>
		    <td><h4 className="text-center table-transp" ><b>9h-10h</b></h4></td>
		  </tr>
		  <tr>
		    <td><h4>Séminaire Android</h4></td>
		    <td><h4 className="text-center table-transp"><b>11h-15h</b></h4></td>
		  </tr>
		  <tr>
		    <td><h4>Sprint All Teams</h4></td>
		    <td><h4 className="text-center table-transp"><b>16h</b></h4></td>
		  </tr>
		  <tr>
		    <td><h4>Brainstorming Résidents</h4></td>
		    <td><h4 className="text-center table-transp"><b>18h</b></h4></td>
		  </tr>
		  <tr>
		    <td><h4>Réunion</h4></td>
		    <td><h4 className="text-center table-transp"><b>20h</b></h4></td>
		  </tr>
		</table>
	      </div>
	    </div>
	);
    }
}
