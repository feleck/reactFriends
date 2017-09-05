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
      <div className='form'>
        <h2> New Contact </h2>
        <form onSubmit={this.handleSubmit}>
          <div className='form-goup'>
            <input name='first_name' placeholder='First Name'
              value={this.props.input_first_name} onChange={this.handleChange}/>
          </div>
          <div className='form-goup'>
            <input name='last_name' placeholder='Last Name'
              value={this.props.input_last_name} onChange={this.handleChange}/>
          </div>
          <div className='form-goup'>
            <input name='email' placeholder='Email'
              value={this.props.input_email} onChange={this.handleChange}/>
          </div>
          <div className='form-goup'>
            <input name='phone' placeholder='Phone'
              value={this.props.input_phone} onChange={this.handleChange}/>
          </div>
          <input type='submit' value='Add Contact' className='btn btn-default' />
        </form>
      </div>
    )
  }
});
