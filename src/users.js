import React from 'react';
var babel = require("babel-core");

export default class Users extends React.Component {
    constructor()
    {
	super();
	this.state = {items:[]}

	this.title = 'Who Is Here ?';
	// fetch('https://innovation-hub.herokuapp.com/user/title')
	this.view = '<td>IMAGE</td><td>{item.firstName}</td><td>{item.lastName}</td>';
	this.viewFirst = '<table>'
	this.viewEnd = '</table>'

	// fetch('https://innovation-hub.herokuapp.com/user/view')
	this.refreshRate = 5000;
	// fetch('https://innovation-hub.herokuapp.com/user/refreshRate')
	setInterval(function()
		    {
			this.update()
		    }.bind(this), this.refreshRate)
    }

    update()
    {
	return (
	    fetch('https://innovation-hub.herokuapp.com/user')
 		.then(result=>result.json())
		.then(items=>this.setState({items}))
	)
    }

    parse(html, item)
    {
	Object.keys(item).forEach(function(key) {
	    html = html.replace('{item.' + key + '}', item[key]);
	});
	return (html);
    }
    
    componentDidMount(){
	this.update();
    }

    render() {
	var result = babel.transform({code: this.view});
	return result.code;
	;
    }
}
