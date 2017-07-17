import React from 'react';

export default class Rooms extends React.Component {
    constructor()
    {
	super();
	this.state = {items:[]}
	setInterval(function()
		    {
			this.update()
		    }.bind(this), 5000)
    }

    update()
    {
	return (
	    fetch('https://innovation-hub.herokuapp.com/hubData/')
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
		    <div className="col-md-12">
		    <div className="box jumbotron text-center" id="rooms">
		    <h3><b>{this.state.items[0].category}</b></h3>
		    <table className="table borderless">
		    {
			this.state.items.map(item=>
					     (<table className="table borderless box">
					      <tr>
					      <td rowSpan={2}>
					      <img src={item.img} height="80"/>
					      </td>
					      <td>
					      {item.room}<br/>{item.value} {item.unit}
					      </td>
					      </tr>
					      </table>)
					    )
		    }
		</table>
		    </div>
		    </div>
	    );
	}
	else
	{
	    return (
		    <div className="col-md-12">
		    <div className="box jumbotron text-center" id="rooms">
		    <h3><b>Room Informations</b></h3>
		    Work In Progress...
		    </div>
		    </div>
	    );
	}
  }
}
