import { Badge, Td, Tr } from 'shared/base';

import { DateTime } from 'luxon';
import React from 'react';
import { mapRoleToText } from 'core/roleToText';

interface IUserProps {
  id: string;
  name: string;
  email: string;
  registrationDate: string;
  role: string;
}

export const User: React.FC<IUserProps> = ({ id, name, email, registrationDate, role }) => {
  return (
    <Tr className="user-container">
      <Td>{name}</Td>
      <Td>{email}</Td>
      <Td>{DateTime.fromSQL(registrationDate).setLocale('ru').toLocaleString(DateTime.DATE_FULL)}</Td>
      <Td>
        <Badge>{mapRoleToText(role)}</Badge>
      </Td>
      <Td></Td>
    </Tr>
  );
};
