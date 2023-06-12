import React from 'react';

export const Contacts = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ name, id, number }) => (
          <li key={id}>
            {name}:{number}
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
