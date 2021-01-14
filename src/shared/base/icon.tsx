import React from 'react';
import classNames from 'classnames';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationArrow, faArrowAltCircleRight, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTelegram, faVk } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { propsToSpace, SpaceProps } from './utils/spaceUtil';

library.add(faLocationArrow, faArrowAltCircleRight, faBars, faTimes, faInstagram, faTelegram, faVk);

export type ImportedIcon =
  | 'location-arrow'
  | 'instagram'
  | 'telegram'
  | 'vk'
  | 'arrow-alt-circle-right'
  | 'bars'
  | 'times';

interface IconProps extends SpaceProps {
  prefix?: 'fas' | 'far' | 'fab';
  name: ImportedIcon;
}

export const Icon: React.FC<IconProps> = ({ prefix = 'fas', name, ...other }) => {
  const classes = classNames(propsToSpace(other));
  return <FontAwesomeIcon icon={[prefix, name]} className={classes} />;
};
