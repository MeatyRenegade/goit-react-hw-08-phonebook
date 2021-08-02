import React from 'react';
import styles from './UserMenu.module.css';

const UserMenu = () => (
  <div className={styles.container}>
    <img src="" alt="" width="32" className={styles.avatar} />
    <span className={styles.name}>Welcome, "user name"</span>
    <button className={styles.button} type="button">
      Log out
    </button>
  </div>
);

export default UserMenu;
