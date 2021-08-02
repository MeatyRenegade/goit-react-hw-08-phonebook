import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './LoginView.module.css';
import { logIn } from '../../redux/auth/auth-operations';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handelChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handelSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>LOGIN</h1>

          <form
            onSubmit={this.handelSubmit}
            className={styles.form}
            autoComplete="off"
          >
            <label className={styles.label}>
              Username
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handelChange}
              />
            </label>
            <label className={styles.label}>
              Password
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handelChange}
              />
            </label>
            <button>SUBMIT</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
