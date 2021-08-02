import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { connect } from 'react-redux';

import Container from './components/Container';
import HomeView from './views/HomeView/HomeView';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';
import ContactsView from './views/ContactsView/ContactsView';
import AppBar from './components/AppBar';
import Loader from './components/Loader';

class App extends Component {
  // componentDidMount() {
  //   this.props.onGetCurrentUser();
  // }

  render() {
    return (
      <Container>
        <AppBar />

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/register" component={RegisterView} />
            <Route path="/login" component={LoginView} />
            <Route path="/contacts" component={ContactsView} />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

// const mapDispatchToProps = {
//   onGetCurrentUser: getCurrentUser,
// };

export default App;
