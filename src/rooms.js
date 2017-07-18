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
	    var results = {};
	    this.state.items.map(function(item)
				 {
				     results[item.room] = item;
				 });
	    var items = []
	    Object.keys(results).forEach(function(result)
					 {
					     items.push(results[result]);
					 });
	    return (
		    <div className="col-md-12">
		    <div className="box jumbotron text-center" id="rooms">
		    <h3><b>{this.state.items[0].category}</b></h3>
		    <table className="table borderless">
		    {
			items.map(item=>
				  (<table className="table borderless box">
				   <tr>
				   <td style={{width:'30%'}}>
				   {
				       item.img ?
					   <img src={item.img} height="80"/>
					   : null
				   }
				   </td>
				   <td>
				   <b>{item.room} [{item.boxId}]</b><br/>{item.value} {item.unit}
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
		    Waiting for data
		    </div>
		    </div>
	    );
	}
  }
}
