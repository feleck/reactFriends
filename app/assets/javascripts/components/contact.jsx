var Contact = React.createClass({
  handleDelete(id) {
      this.props.handleDelete(id);
  },

  render: function() {
    return (
      <div>
        <h3>{this.props.contact.first_name + " " + this.props.contact.last_name}</h3>
        <h5>{this.props.contact.email + ", " + this.props.contact.phone}</h5>
        <button className='btn btn-danger btn-sm' onClick={this.props.handleDelete}>Delete</button>
        <hr />
      </div>
    )
  }
});
