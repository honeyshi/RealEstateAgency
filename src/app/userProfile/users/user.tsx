import { Badge, Button, Flexbox, RemixIcon, Td } from 'shared/base';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { DateTime } from 'luxon';
import { UserMenu } from './userMenu';
import { UserRoles } from 'data/values';
import { mapRoleToText } from 'core/roleToText';

interface IUserProps {
  id: string;
  ownId: string;
  name: string;
  email: string;
  registrationDate: string;
  role: string;
  ownRole: string;
}

export const User: React.FC<IUserProps> = ({ id, ownId, name, email, registrationDate, role, ownRole }) => {
  const [showMenu, setShowMenu] = useState(false);

  const userMenuRef = useRef<HTMLTableRowElement>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (!userMenuRef.current || userMenuRef.current.contains(e.target as Node)) return;
      setShowMenu(false);
    },
    [userMenuRef]
  );

  useEffect(() => {
    if (showMenu) document.addEventListener('mousedown', handleClickOutside);
    else document.removeEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu, handleClickOutside]);

  console.log(!(ownRole === UserRoles.Manager && role === UserRoles.Admin));

  return (
    <tr className="user-container" ref={userMenuRef}>
      <Td>{name}</Td>
      <Td>{email}</Td>
      <Td>{DateTime.fromSQL(registrationDate).setLocale('ru').toLocaleString(DateTime.DATE_FULL)}</Td>
      <Td>
        <Badge>{mapRoleToText(role)}</Badge>
      </Td>
      <Td className="menu-button-container">
        {(id !== ownId && !(ownRole === UserRoles.Manager && role === UserRoles.Admin)) && (
          <>
            <Button className="shadow menu" px="2" pt="2" pb="0" onClick={() => setShowMenu(!showMenu)}>
              <RemixIcon name="menu" size="sm" />
            </Button>
            <Flexbox justifyContent="end">
              <UserMenu show={showMenu} userId={id} userRole={role} ownRole={ownRole} />
            </Flexbox>
          </>
        )}
      </Td>
    </tr>
  );
};
