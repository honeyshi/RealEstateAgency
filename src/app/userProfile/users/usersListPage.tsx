import './user.scss';

import { Loading, THead, Table, Th, Tr } from 'shared/base';
import React, { useEffect, useMemo, useState } from 'react';

import { DefaultListBlock } from 'shared/layout/defaultListBlock';
import { NoResultsPage } from 'shared/layout/noResultsPage';
import { User } from './user';
import { UserModel } from 'core/users/user';
import { performGetUsersRequest } from 'core/users/getUsers';

export const UserListPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    let mounted = false;
    const fetchData = async () => {
      setLoading(true);
      const result = await performGetUsersRequest();
      if (!mounted) setUsers(result);
      setLoading(false);
    };
    fetchData();
    return () => {
      mounted = true;
    };
  }, []);

  const userItemComponents = useMemo(() => {
    return users.map((user) => {
      return (
        <User id={user.id} name={user.name} email={user.email} registrationDate={user.created_at} role={user.role} />
      );
    });
  }, [users]);
  return (
    <DefaultListBlock>
      {loading ? (
        <Loading loading />
      ) : (
        <>
          {userItemComponents.length !== 0 ? (
            <Table className="users-list-container">
              <THead>
                <Tr>
                  <Th>Имя</Th>
                  <Th>Email</Th>
                  <Th>Дата регистрации</Th>
                  <Th>Роль</Th>
                  <Th>Действия</Th>
                </Tr>
              </THead>
              <tbody>{userItemComponents}</tbody>
            </Table>
          ) : (
            <NoResultsPage>По вашему запросу не было найдено пользователей</NoResultsPage>
          )}
        </>
      )}
    </DefaultListBlock>
  );
};
