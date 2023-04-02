import React, { useState } from 'react';
import Insect from '../../../assets/insect.svg';
import { InsectProps } from './index.types';
import * as styles from './insect.module.scss';

const Index = ({ top = 0, onClick }: InsectProps) => {
  const [key, setKey] = useState<number>(0);

  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    if (onClick) onClick();
    setKey((old) => old + (1 % 2));
  };

  return (
    <span
      key={key}
      onClick={handleClick}
      style={{ top: top + '%', animationDelay: top / 5 + 's' }}
      className={styles.insect}
    >
      <Insect width={88} style={{ transform: 'rotate(132.04deg)' }} />
    </span>
  );
};

export default Index;
