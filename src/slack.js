import React from 'react';
import SlackAPI from 'slack-node'

export default class Slack extends React.Component {
  constructor()
  {
    super();
      this.state = {messages: []}
      var slug = ["xoxp-93289188645",
		       "-146266872480",
		       "-212866155360",
		       "-2ae8a83f68b508e920ca3a0",
		       "787b4d1d8"];
      var apiToken = slug.join('');
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
		       if (response.messages && response.messages.matches)
			   response.messages.matches.reverse();
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
