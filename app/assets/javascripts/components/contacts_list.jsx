var ContactsList = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.contacts.map(function(contact) {
          return (
            <Contact contact={contact} key={contact.id}/>
          )
        })}
      </div>
    )
  }
});
