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
    return (
      <div className="col-md-12">
	<div className="box jumbotron text-center" id="rooms">
	  Work In Progress...
	  <h3><b>Temperatures</b></h3>
	    <table className="table borderless">
	      {
		this.state.items.map(item=>
		  (item.category === 'Temperature')
		  ? (<table className="table borderless box">
		    <tr>
		      <td rowSpan={2}>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Weather-sun-clouds-rain.svg/200px-Weather-sun-clouds-rain.svg.png" height="80"/>
		      </td>
		      <td>
			{item.room}<br/>{item.value} {item.unit}
		      </td>
		    </tr>
		  </table>)
		  : null
		)
	      }
	    </table>
	  </div>
	</div>
    );
  }
}
