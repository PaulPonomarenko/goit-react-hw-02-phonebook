import React from 'react';
import { FormData } from './FormData/FormData';
import { Contacts } from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  onSubmit = data => {
    const { name, number } = data;
    const contact = {
      name: name,
      number: number,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };
  changeFilter = event => {
    this.setState({ filter: event.target.value });
    console.log(event.target.value);
  };

  showVisibleContact = () => {
    const { contacts, filter } = this.state;
    const filtred = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filtred;
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.showVisibleContact();
    return (
      <>
        <h2>PHONEBOOK</h2>
        <FormData onSubmit={this.onSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <Contacts contacts={visibleContact} />
      </>
    );
  }
}
