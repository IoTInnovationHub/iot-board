import React from 'react';

export default class Calendar extends React.Component {
    constructor()
    {
	super();
	this.state = {items:[]}
	setInterval(function()
		    {
			this.update()
		    }.bind(this), 60000)
    }

    update()
    {
	return (
	    fetch('https://innovation-hub.herokuapp.com/event')
 		.then(result=>result.json())
		.then(items=>{
		    items.reverse();
		    this.setState({items});
		})
	)
    }

    componentDidMount(){
	this.update();
    }

    formatTime(time){
	var today = new Date;
	var res = new Date(Date.parse(time))
	if (res.getDate() === today.getDate())
	    return res.getHours().toString() + 'h';
	else
	    return 'Tomorrow : ' + res.getHours().toString() + 'h';
    }
    
    render() {
	return (
		<div className="box jumbotron text-center borderless">
		<h3><b>Today</b></h3>
		<table className="table borderless">
	    	{
		    this.state.items.map(item => <tr><td style={{width:'20%'}} >{this.formatTime(item.start)} - {this.formatTime(item.end)}</td><td>{item.summary}</td></tr>)
		}
	    </table>
		</div>
	);
    }
}
