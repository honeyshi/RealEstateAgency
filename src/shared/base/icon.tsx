import React from 'react';
import classNames from 'classnames';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLocationArrow,
  faArrowAltCircleRight,
  faBars,
  faTimes,
  faAngleDown,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTelegram, faVk } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { propsToSpace, SpaceProps } from './utils/spaceUtil';

library.add(
  faLocationArrow,
  faArrowAltCircleRight,
  faBars,
  faTimes,
  faAngleDown,
  faAngleUp,
  faInstagram,
  faTelegram,
  faVk
);

export type ImportedIcon =
  | 'location-arrow'
  | 'instagram'
  | 'telegram'
  | 'vk'
  | 'arrow-alt-circle-right'
  | 'bars'
  | 'times'
  | 'angle-up'
  | 'angle-down';

interface IconProps extends SpaceProps {
  className?: string;
  prefix?: 'fas' | 'far' | 'fab';
  name: ImportedIcon;
}

export const Icon: React.FC<IconProps> = ({ className, prefix = 'fas', name, ...other }) => {
  const classes = classNames(propsToSpace(other), className);
  return <FontAwesomeIcon icon={[prefix, name]} className={classes} />;
};
