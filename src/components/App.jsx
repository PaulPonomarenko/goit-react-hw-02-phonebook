import React from 'react';
import { FormData } from './FormData/FormData';
import { Contacts } from './Contacts/Contacts';
import { nanoid } from 'nanoid';
export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
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
  render() {
    return (
      <>
        <FormData onSubmit={this.onSubmit} />;
        <Contacts contacts={this.state.contacts} />
      </>
    );
  }
}
