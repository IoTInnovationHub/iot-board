import React from 'react';
import SlackAPI from 'slack-node'

export default class Slack extends React.Component {
  constructor()
  {
    super();
      this.state = {messages: []};
      var slug = ["xoxp-93289188645",
		       "-146266872480",
		       "-212866155360",
		       "-2ae8a83f68b508e920ca3a0",
		       "787b4d1d8"];
      var apiToken = slug.join('');
    this.slack = new SlackAPI(apiToken);
    this.slack.api("users.list", function (err, response) {
      this.persons = response.members;
    }.bind(this)
    );
      setInterval(function()
	{
	  this.update()
	}.bind(this), 30000)
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
		   }.bind(this)
		  );
  }

  componentDidMount(){
    this.update();
  }

  translateUsername(text)
  {
    if (this.persons)
    {
      var index;
      if ((index = text.search("<@")) > -1)
      {
	var string = text.substring(index + 2, text.indexOf('>'));
	for (var person in this.persons)
	{
	  if (string === this.persons[person].id)
	  {
	    var reg = new RegExp("<@" + string + ">", "i")
	    text = text.replace(reg, "@" + this.persons[person].name);
	    break ;
	  }
	}
      }
    }
    return (text);
  }

  render() {
    if (this.state.messages && this.state.messages.matches && this.state.messages.matches.length > 0)
      return (
	  <div className="col-md-12">
	  <div className="box jumbotron text-center" id="message">
	  <h3><b>Slack @board</b></h3>
	  <table className="table borderless">
	  {this.state.messages.matches.map(msg=><tr><td>[{msg.username}]</td><td>{this.translateUsername(msg.text)}</td></tr>)}
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
