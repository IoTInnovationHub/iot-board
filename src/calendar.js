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
	var offtime = (process.env.STATUS === 'Far' ? 2 : 2);
	if (res.getDate() === today.getDate())
	{
	    var hours = (res.getHours() + offtime).toString() + 'h'
	    	+ (res.getMinutes() !== 0 ? res.getMinutes().toString() : '')
		+ '-' + (res2.getHours() + offtime).toString() + 'h'
		+ (res2.getMinutes() !== 0 ? res2.getMinutes().toString() : '');
	    if (res.getHours() === offtime && res2.getHours() === offtime && res.getDate() === res2.getDate() - 1)
		hours = 'All Day';
	    return hours;
	}
	else if (res.getDate() === today.getDate() + 1)
	{
	    var hours = (res.getHours() + offtime).toString() + 'h'
	    	+ (res.getMinutes() !== 0 ? res.getMinutes().toString() : '')
		+ '-' + (res2.getHours() + offtime).toString() + 'h'
	    	+ (res.getMinutes() !== 0 ? res.getMinutes().toString() : '');
	    if (res.getHours() === offtime && res2.getHours() === offtime && res.getDate() === res2.getDate() - 1)
		hours = 'All Day';
	    return 'Tomorrow : ' + hours;
	}
	else
	{
	    return res.getDate().toString() + '/' + (res.getMonth() + 1).toString();
	}
    }
    
    render() {
	return (
		<div className="text-center borderless">
		<br/>
		<h3><b>Upcoming Events</b></h3>
		<br/>
		<table className="table">
	    	{
		    this.state.items.map(item => <tr className="box"><td style={{width:'25%'}, {padding:'5px'}} >{this.formatTime(item.start, item.end)}</td><td>{item.summary}</td></tr>)
		}
	    </table>
		</div>
	);
    }
}
