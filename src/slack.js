import React from 'react';
import SlackAPI from 'slack-node'

export default class Slack extends React.Component {
  constructor()
  {
    super();
      this.state = {messages: []}
    var apiToken = "xoxp-93289188645-146266872480-214379413910-bfb9b30fbb95a4f89d1462a287259787";
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
	sort: 'timestamp',
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
