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
      <div className='container'>
        <div className="jumbotron">
          <h1>ReactJS Friends List</h1>
          <p><em>S</em>ingle <em>P</em>age <em>A</em>pp written using Ruby on Rails and React.JS duo.</p>
          <p>by Marcin</p>
        </div>
        <div className="row">
          <div className='col-7 ml-auto'>
            <ContactsList contacts={this.state.contacts} />
          </div>
          <div className='col-4'>
            <ContactForm
              input_first_name={this.state.first_name}
              input_last_name={this.state.last_name}
              input_email={this.state.email}
              input_phone={this.state.phone}
              onUserInput={this.handleUserInput}
              onFormSubmit={this.handleFormSubmit}/>
          </div>
        </div>
      </div>
    )
  }
});
