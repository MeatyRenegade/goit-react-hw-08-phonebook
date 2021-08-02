import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './RegisterView.module.css';
import { register } from '../../redux/auth/auth-operations';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handelChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handelSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>SIGN-UP</h1>
          <form
            onSubmit={this.handelSubmit}
            className={styles.form}
            autoComplete="off"
          >
            <label className={styles.label}>
              Name
              <input
                type="name"
                name="name"
                value={name}
                onChange={this.handelChange}
              />
            </label>
            <label className={styles.label}>
              E-mail
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
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
