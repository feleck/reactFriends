var ContactsList = React.createClass({
  render: function() {
    return (
      <div className='container'>
        {this.props.contacts.map(function(contact) {
          return (
            <Contact contact={contact} key={contact.id}/>
          )
        })}
      </div>
    )
  }
});
