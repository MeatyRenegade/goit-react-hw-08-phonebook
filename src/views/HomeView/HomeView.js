import React from 'react';
import styles from './HomeView.module.css';

const HomeView = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>
      Welcome to your handy Phonebook{' '}
      <span role="img" aria-label="Welcome icon">
        😉
      </span>
    </h1>
  </div>
);

export default HomeView;
