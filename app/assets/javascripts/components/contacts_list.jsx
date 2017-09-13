var ContactsList = React.createClass({

  handleDelete: function(id) {
    this.props.handleDelete(id)
  },

  render: function() {
    return (
      <div className='container'>
        {this.props.contacts.map(function(contact) {
          return (
            <Contact contact={contact} key={contact.id} handleDelete={this.handleDelete.bind(this,contact.id)} />
          )
        }, this)
      }
      </div>
    )
  }
});
