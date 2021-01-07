import React from 'react';

import { Block } from 'shared/base';

export const ErrorMessagesView: React.FC<{ messages: string | string[] }> = ({ messages }) => {
  let errorMessages = null;
  if (messages !== '') errorMessages = Array.isArray(messages) && messages.length > 0 ? messages : [messages];

  if (errorMessages !== null) {
    return (
      <Block text="danger">
        <ul className="list-unstyled">
          {errorMessages.map((errorMessage, i) => (
            <li key={`error-message-${i}`}>{errorMessage}</li>
          ))}
        </ul>
      </Block>
    );
  }
  return null;
};
