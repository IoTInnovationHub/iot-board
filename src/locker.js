import React from 'react'

export default class Locker extends React.Component {
    render() {
	return (
	    <div className="col-md-12">
	      <div className="box jumbotron text-center" id="inventaire">
		<h3><b>OBJETS EN MA POSSESSION</b></h3>
		<table style={{width: 100 + '%', textAlign: 'left'}}>
		  <tr>
		    <td><h4>Raspberry Pi 3</h4></td>
		    <td><h4>Casier 15</h4></td>
		    <td><h4>15h</h4></td>

		  </tr>
		  <tr>
		    <td><h4>Fer à souder</h4></td>
		    <td><h4>Casier 16</h4></td>
		    <td><h4>3h</h4></td>
		  </tr>
		  <tr>
		    <td><h4>&nbsp; </h4></td>
		    <td><h4> </h4></td>
		    <td><h4> </h4></td>          </tr>
		  <tr>
		    <td><h4> &nbsp;</h4></td>
		    <td><h4> </h4></td>
		    <td><h4> </h4></td>
		  </tr>
		  <tr>
		    <td><h4>&nbsp;</h4></td>
		    <td><h4> </h4></td>
		    <td><h4> </h4></td>
		  </tr>
		  <tr>
		    <td><h4>&nbsp;</h4></td>
		    <td><h4> </h4></td>
		    <td><h4> </h4></td>
		  </tr>
		  <tr>
		    <td><h4> &nbsp;</h4></td>
		    <td><h4> </h4></td>
		    <td><h4> </h4></td>
		  </tr>
		</table>
	      </div>
	    </div>
	);
    }
}
