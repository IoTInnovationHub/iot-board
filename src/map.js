import React from 'react';

export default class Map extends React.Component {
    render() {
	return (
	    <div className="col-md-12 box jumbotron">
		<table style={{width: '100%'}} className="table borderless text-center">
		<tr>
		<td>
		Work In Progress...
		</td>
		</tr>
		<tr>
		<td>
		<div className="text-center" id="map">
		<img src={require("./img/map.png")} alt="hub-map"/>
		</div>
		</td>
		</tr>
		</table>
		</div>
	);
    }
}
