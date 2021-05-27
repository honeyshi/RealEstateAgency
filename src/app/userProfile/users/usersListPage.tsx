import './user.scss';

import { Loading, THead, Table, Th, Tr } from 'shared/base';
import React, { useEffect, useMemo, useState } from 'react';

import { DefaultListBlock } from 'shared/layout/defaultListBlock';
import { NoResultsPage } from 'shared/layout/noResultsPage';
import { User } from './user';
import { UserModel } from 'core/users/user';
import { history } from 'core/history';
import { performGetUserInfoRequest } from 'core/profile/getUserInformation';
import { performGetUsersRequest } from 'core/users/getUsers';

export const UserListPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<UserModel[]>([]);
  const [userInfo, setUserInfo] = useState({ id: '', role: '2' });

  useEffect(() => {
    let mounted = false;
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await performGetUsersRequest();
        const userData = await performGetUserInfoRequest();
        if (!mounted) {
          setUsers(result);
          setUserInfo({ id: userData.id, role: userData.role });
        }
        setLoading(false);
      } catch (error) {
        history.push('/error');
      }
    };
    fetchData();
    return () => {
      mounted = true;
    };
  }, []);

  const userItemComponents = useMemo(() => {
    return users.map((user) => {
      return (
        <User
          id={user.id}
          ownId={userInfo.id}
          name={user.name}
          email={user.email}
          registrationDate={user.created_at}
          role={user.role}
          ownRole={userInfo.role}
          key={`user-${user.id}`}
        />
      );
    });
  }, [users, userInfo]);
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
