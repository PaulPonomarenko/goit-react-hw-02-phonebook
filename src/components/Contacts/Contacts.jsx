import React from 'react';

export const Contacts = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} id={contact.id}>
            {contact.name}:{contact.number}
          </li>
        ))}
      </ul>
    </div>
  );
};
