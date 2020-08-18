import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  resetState() {
    this.setState({
      username: '', 
      password: ''
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const newState = {...this.state};
    this.props.processForm(newState);
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  render() {
    const { formType, sessionErrors, otherForm } = this.props;
    const { username, password } = this.state;

    const otherButtonName = (formType === 'login') ? 'Signup' : 'Login';
    const errorMsgs = sessionErrors.map((error, idx) => <li key={idx}>{error}</li>);

    // {currentUserId > 0 && <Redirect to='/' />} {/* Stop logged in users from accessing this form */}
    return (
      <div>
        <h3>{formType.toUpperCase()}</h3>
        <form onSubmit={this.handleSubmit}>
          {sessionErrors.length > 0 && <ul className="errors">{errorMsgs}</ul>}
          Username:
          <input
            type="text"
            value={username}
            onChange={this.handleChange("username")}
          />{" "}
          <br />
          Password:
          <input
            type="password"
            value={password}
            onChange={this.handleChange("password")}
          /><br/>
          <button>{formType}</button>
        </form>
        {/* <Link to={`/${otherButtonName.toLowerCase()}`}>{otherButtonName}</Link> */}
        {otherForm}
      </div>
    );
  }
}

export default SessionForm;