import React from 'react';

interface Props {
  className?: string;
}

export const Tr: React.FC<Props> = ({ className, children, ...other }) => {
  return (
    <tr className={className} {...other}>
      {children}
    </tr>
  );
};

export const Th: React.FC<Props> = ({ className, children, ...other }) => {
  return (
    <th className={className} {...other}>
      {children}
    </th>
  );
};

export const Td: React.FC<Props> = ({ className, children, ...other }) => {
  return (
    <td className={className} {...other}>
      {children}
    </td>
  );
};
