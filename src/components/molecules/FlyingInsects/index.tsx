import React, { useEffect, useState } from 'react';
import FlyingInsect from '../../atoms/FlyingInsect';
import * as styles from './index.module.scss';

const Index = () => {
  const [catched, setCatched] = useState<number>(0);

  const handleClick = () => {
    setCatched((old) => old + 1);
  };

  useEffect(() => {
    console.log(catched);
  }, [catched]);

  return (
    <span className={styles.wrap}>
      <FlyingInsect top={30} onClick={handleClick} />
      <FlyingInsect top={50} onClick={handleClick} />
      <FlyingInsect top={70} onClick={handleClick} />
      <FlyingInsect top={20} onClick={handleClick} />
    </span>
  );
};

export default Index;
