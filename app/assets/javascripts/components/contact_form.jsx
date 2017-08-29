var ContactForm = React.createClass({
  handleChange: function(e) {
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  },

  render: function() {
    return (
      <div>
        <h2> New Contact </h2>
        <form onSubmit={this.handleSubmit}>
          <input name='first_name' placeholder='First Name'
            value={this.props.input_first_name} onChange={this.handleChange}/>
          <input name='last_name' placeholder='Last Name'
            value={this.props.input_last_name} onChange={this.handleChange}/>
          <input name='email' placeholder='Email'
            value={this.props.input_email} onChange={this.handleChange}/>
          <input name='phone' placeholder='Phone'
            value={this.props.input_phone} onChange={this.handleChange}/>
          <input type='submit' value='Add Contact' />
        </form>
      </div>
    )
  }
});
