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

    formatTime(start, end){
	var today = new Date;
	var res = new Date(Date.parse(start))
	var res2 = new Date(Date.parse(end))
	if (res.getDate() === today.getDate())
	    return res.getHours().toString() + 'h' + '-' + res2.getHours().toString() + 'h';
	else
	    return 'Tomorrow : ' + res.getHours().toString() + 'h' + ' - ' + res2.getHours().toString() + 'h';
    }
    
    render() {
	return (
		<div className="box jumbotron text-center borderless">
		<h3><b>Today</b></h3>
		<table className="table borderless">
	    	{
		    this.state.items.map(item => <tr><td style={{width:'35%'}} >{this.formatTime(item.start, item.end)}</td><td>{item.summary}</td></tr>)
		}
	    </table>
		</div>
	);
    }
}
