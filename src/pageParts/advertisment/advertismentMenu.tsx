import './advertismentMenu.scss';

import { Button, Flexbox, RemixIcon, TextField } from 'shared/base';

import React from 'react';
import { Statuses } from 'data/values';
import classNames from 'classnames';

interface IAdvertismentMenuProps {
  admin?: boolean;
  status?: number;
  show: boolean;
}

const DefaultButton: React.FC<{ iconName: string; className?: string }> = ({ iconName, className, children }) => {
  return (
    <Button primary className={classNames(className)} mb="2">
      <Flexbox>
        <RemixIcon name={iconName} mr="2" />
        <TextField tag="span">{children}</TextField>
      </Flexbox>
    </Button>
  );
};

const DeclineButton: React.FC = () => {
  return <DefaultButton iconName="close">Отклонить</DefaultButton>;
};

const BlockButton: React.FC = () => {
  return <DefaultButton iconName="forbid">Заблокировать</DefaultButton>;
};

const PublishButton: React.FC = () => {
  return <DefaultButton iconName="task">Опубликовать</DefaultButton>;
};

export const AdvertismentMenu: React.FC<IAdvertismentMenuProps> = ({ admin, status, show }) => {
  return (
    <div className={classNames('p-2 advertisment-menu shadow', show ? 'd-flex flex-column' : 'd-none')}>
      <DefaultButton iconName="edit">Редактировать</DefaultButton>
      {admin && status === Statuses.moderation && (
        <>
          <PublishButton /> <DeclineButton />
        </>
      )}
      {admin && status === Statuses.unpublished && <PublishButton />}
      {admin && status === Statuses.published && <BlockButton />}
      {admin && status === Statuses.blocked && <PublishButton />}
      {admin && status === Statuses.declined && <PublishButton />}
      <DefaultButton iconName="delete-bin" className="delete-button">
        Удалить
      </DefaultButton>
    </div>
  );
};
