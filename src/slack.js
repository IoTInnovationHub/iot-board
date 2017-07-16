import React from 'react';
import SlackAPI from 'slack-node'

export default class Slack extends React.Component {
  constructor()
  {
    super();
    this.state = {items:[]}
    var apiToken = "xoxp-93289188645-146266872480-214379413910-bfb9b30fbb95a4f89d1462a287259787";
    this.slack = new SlackAPI(apiToken);
      setInterval(function()
	{
	  this.update()
	}.bind(this), 5000)
  }

  update()
  {
    //this.slack.api("search.messages",
      //{
	//query:'\@board'
      //}, function(err, response) {
      //console.log(response);
    //});
  }

  componentDidMount(){
    this.update();
  }

  render() {
    return (
      <div className="col-md-12">
	<div className="box jumbotron text-center" id="message">
	  <h3><b>Slack</b></h3>
	  Work In Progress...
	</div>
      </div>
    );
  }
}
