var Contact = React.createClass({
  render: function() {
    return (
      <div>
        <h3>{this.props.contact.first_name + " " + this.props.contact.last_name}</h3>
        <h3>{this.props.contact.email + ", " + this.props.contact.phone}</h3>
        <hr />
      </div>
    )
  }
});
