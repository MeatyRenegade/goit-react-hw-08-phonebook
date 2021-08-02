import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import ContactForm from './components/ContactForm';
// import ContactList from './components/ContactList';
import Container from './components/Container';

import HomeView from './views/HomeView/HomeView';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';
// import Filter from './components/Filter';
import ContactsView from './views/ContactsView/ContactsView';
import AppBar from './components/AppBar';
import Loader from './components/Loader';
// import { getLoading } from './redux/contacts/contacts-selectors';

class App extends Component {
  // componentDidMount() {
  //   this.props.onGetCurrentUser();
  // }

  render() {
    return (
      <Container>
        <AppBar />

        {/* <ContactForm /> */}
        {/* <Filter /> */}
        {/* <ContactList /> */}
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
//   onGetCurrentUser: authOperations.getCurrentUser,
// };

export default App;
