import React from 'react';

export const Contacts = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ name, id, number }) => (
          <li key={id}>
            {name}:{number}
          </li>
        ))}
      </ul>
    </div>
  );
};
