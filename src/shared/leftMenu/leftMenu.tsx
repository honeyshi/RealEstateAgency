import './leftMenuStyle.scss';

import React, { useMemo } from 'react';

import { ILeftMenuItem } from './leftMenuItemProps';
import { LeftMenuItem } from './leftMenuItem';

interface ILeftMenuProps {
  withDispatch?: boolean;
  activeItemIndex: number;
  leftMenuItems: ILeftMenuItem[];
  setActiveMethod: (value: number) => void;
}

export const LeftMenu: React.FC<ILeftMenuProps> = ({ withDispatch, activeItemIndex, leftMenuItems, setActiveMethod }) => {
  const leftItemComponents = useMemo(() => {
    const items = leftMenuItems.map((leftMenuItem, index) => {
      return (
        <LeftMenuItem
          active={index + 1 === activeItemIndex}
          header={leftMenuItem.header}
          iconName={leftMenuItem.iconName}
          index={index}
          setActiveMethod={setActiveMethod}
          withDispatch={withDispatch}
          key={leftMenuItem.header}
        />
      );
    });
    return items;
  }, [activeItemIndex, leftMenuItems, setActiveMethod, withDispatch]);
  return <ul className="left-menu-container">{leftItemComponents}</ul>;
};
