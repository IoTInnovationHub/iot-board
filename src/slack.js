import React from 'react';
import SlackAPI from 'slack-node'

export default class Slack extends React.Component {
  constructor()
  {
    super();
      this.state = {messages: []}
    var apiToken = "xoxp-93289188645-146266872480-213572008308-81ba928abec444b039afdb2786ebfae0"
    this.slack = new SlackAPI(apiToken);
      setInterval(function()
	{
	  this.update()
	}.bind(this), 1000)
  }

  update()
    {
    this.slack.api("search.messages", {
	query: 'in:board',
	count: '10'
    },
		   function(err, response) {
		       this.setState({messages: response.messages});
		       console.log(response);
		   }.bind(this)
		  );
  }

  componentDidMount(){
    this.update();
  }

    render() {
	if (this.state.messages && this.state.messages.matches && this.state.messages.matches.length > 0)
	    return (
		    <div className="col-md-12">
		    <div className="box jumbotron text-center" id="message">
		    <h3><b>Slack @board</b></h3>
		    <table className="table borderless">
		    {this.state.messages.matches.map(msg=><tr><td>[{msg.username}]</td><td>{msg.text}</td></tr>)}
		</table>
		</div>
		    </div>
	    )
	else
	    return (
		    <div className="col-md-12">
		    <div className="box jumbotron text-center" id="message">
		    <h3><b>Slack @board</b></h3>
		    No messages.
		</div>
		    </div>
	    );
  }
}
