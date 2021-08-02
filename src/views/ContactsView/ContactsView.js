import { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import Loader from '../../components/Loader';
import { getLoading } from '../../redux/contacts/contacts-selectors';
import styles from './ContactsView.module.css';

class ContactsView extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { isLoadingContacts } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <ContactForm />
          <Filter />
          <ContactList />

          {isLoadingContacts && <Loader />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: getLoading(state),
});

export default connect(mapStateToProps)(ContactsView);
