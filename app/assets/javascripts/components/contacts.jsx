var Contacts = React.createClass({
  getInitialState: function() {
    return {
      contacts: this.props.contacts,
      first_name: '',
      last_name: '',
      email: '',
      phone: ''
    }
  },

  handleUserInput: function(obj) {
    this.setState(obj);
  },

  handleFormSubmit: function() {
    var contact = {first_name: this.state.first_name,
      last_name: this.state.last_name, email: this.state.email,
      phone: this.state.phone};
    $.post('/contacts',
          {contact: contact})
          .done(function(data) {
            this.addNewContact(data);
          }.bind(this));
  },

  addNewContact: function(contact) {
    var contacts = React.addons.update(this.state.contacts, { $push: [contact] });
    this.setState({
      contacts: contacts.sort()
    });
  },

  render: function() {
    return (
      <div>
        <ContactsList contacts={this.state.contacts} />
        <ContactForm
          input_first_name={this.state.first_name}
          input_last_name={this.state.last_name}
          input_email={this.state.email}
          input_phone={this.state.phone}
          onUserInput={this.handleUserInput}
          onFormSubmit={this.handleFormSubmit}/>
      </div>
    )
  }
});
