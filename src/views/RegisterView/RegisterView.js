import React, { Component } from 'react';
import styles from './RegisterView.module.css';

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

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1>Login page</h1>

        <form
          onSubmit={this.handelSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <label className={styles.label}>
            name
            <input
              type="name"
              name="name"
              value={name}
              onChange={this.handelChange}
            />
          </label>
          <label className={styles.label}>
            e-mail
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handelChange}
            />
          </label>
          <label className={styles.label}>
            password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handelChange}
            />
          </label>
          <button>sign-up</button>
        </form>
      </div>
    );
  }
}

export default RegisterView;
