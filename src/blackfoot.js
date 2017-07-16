import React from 'react';

export default class Blackfoot extends React.Component {
    render() {
	return (
		<div className="box jumbotron" id="who">
		<table className="table borderless text-center bold" id="blackfoot">
		<tr>
		<td>
		<img src={require('./img/arthur.jpg')} height="75"/>
		</td>
		<td>
		<img src={require('./img/pm.jpg')} height="75"/>
		</td>
		<td>
		<img src={require('./img/kevin.jpg')} height="75"/>
		</td>
		<td>
		<img src={require('./img/max.jpg')} height="75"/>
		</td>
		</tr>
		<tr>
		<td>
		Arthur Davoine
	    </td>
		<td>
		Pierre-Marie Laguet
	    </td>
		<td>
		Kevin B. Lederman
	    </td>
		<td>
		Maxime Bourgeois
	    </td>
		</tr>
		</table>
		</div>
	);
    }
}
