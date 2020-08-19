import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import DemoUser from './demo_user';

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
    const { formType, sessionErrors, otherForm, processForm } = this.props;
    const { username, password } = this.state;

    const errorMsgs = sessionErrors.map((error, idx) => <li key={idx}>{error}</li>);
    
    const formText = otherForm.props.children;
    const otherSession = (formText === 'Signup' ? 
      <div>No account?<br/>{otherForm}</div> :
      <div>Have an account?<br/>{otherForm}</div>
    );

    return (
      <div>
        <h1 className="session-header">{formType.toUpperCase()}</h1>
        <form className="session-form" onSubmit={this.handleSubmit}>
          {sessionErrors.length > 0 && <ul className="errors">{errorMsgs}</ul>}
          <div className="session-field">
            <label htmlFor="session-username">
              Username: 
            </label>
            <input
              id="session-username"
              type="text"
              value={username}
              onChange={this.handleChange("username")}
            />{" "}
            <br />
          </div>
          <div className="session-field">  
            <label htmlFor="session-password">
              Password: 
            </label>
            <input
              id="session-password"
              type="password"
              value={password}
              onChange={this.handleChange("password")}
            /><br/>
          </div>
          <button className="session-button">{formType}</button>
        </form><br />
        {otherSession}
        {formText === 'Signup' && <DemoUser processForm={processForm} />}
      </div>
    );
  }
}

export default SessionForm;