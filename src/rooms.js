import React from 'react';

export default class Rooms extends React.Component {
    render() {
	return (
	    <div className="col-md-12">
		<div className="box jumbotron text-center" id="rooms">
		Work In Progress...
		<h3><b>Temperatures</b></h3>
		<table className="table borderless">
		<tr>
		<td>
		<table className="table borderless box">
		<tr>
		<td rowspan={2}>
		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Weather-sun-clouds-rain.svg/200px-Weather-sun-clouds-rain.svg.png" height="80" />
		</td>
		<td>
		Cocreer<br/>17.5 Celsius
	    </td>
		</tr>
		</table>
		</td>
		</tr>

	    	<tr>
		<td>
		<table className="table borderless box">
		<tr>
		<td rowspan={2}>
		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Weather-sun-clouds-rain.svg/200px-Weather-sun-clouds-rain.svg.png" height="80" />
		</td>
		<td>
		Echanger<br/>18.5 Celsius
	    </td>
		</tr>
		</table>
		</td>
		</tr>

	    </table>
	      </div>
	    </div>
	);
    }
}
