import React from 'react';

export default class Calendar extends React.Component {
    constructor()
    {
	super();
	this.state = {items:[]}
	setInterval(function()
		    {
			this.update()
		    }.bind(this), 30000)
    }

    update()
    {
	return (
	    fetch('https://innovation-hub.herokuapp.com/event')
 		.then(result=>result.json())
		.then(items=>this.setState({items}))
	)
    }

    componentDidMount(){
	this.update();
    }

    render() {
	return (
		<div className="box jumbotron text-center borderless">
		<h3><b>Today</b></h3>
		<table className="table borderless">
	    	{
		    this.state.items.map(item => <tr className="box"><td>{item.start}</td><td>{item.summary}</td></tr>)
		}
	    </table>
		</div>
	);
    }
}
