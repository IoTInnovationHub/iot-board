import React from 'react';

export default class Users extends React.Component {
    constructor()
    {
	super();
	this.state = {items:[]}
	setInterval(function()
		    {
			this.update()
		    }.bind(this), 1000)
    }

    update()
    {
	return (
	    fetch('https://innovation-hub.herokuapp.com/user/present')
 		.then(result=>result.json())
		.then(items=>this.setState({items}))
	)
    }

    componentDidMount(){
	this.update();
    }

    render() {
	if (this.state.items.length > 0)
	{
	    return (
		    <div className="box jumbotron text-center borderless">
		    <h3><b>Who is here ?</b></h3>
	    	    {
			this.state.items.map(item => <img key={item.id} src={item.imgurl} className="beautifulImg" width='50'/>)
		    }
		</div>
	    );
	}
	else
	{
	    return (
		    <div className="box jumbotron text-center borderless">
		    <h3><b>Who is here ?</b></h3>
		    Nobody.
		</div>
	    );	    
	}
    }
}
