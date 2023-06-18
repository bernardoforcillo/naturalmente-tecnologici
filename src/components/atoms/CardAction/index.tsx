import React from 'react';
import { FastActionProps } from './index.types';
import { Link } from 'gatsby';
import * as styles from './index.module.scss';
import { useInView } from 'react-intersection-observer';
import Button from '../Button';

const Index = ({
  text,
  icon,
  buttonHref,
  buttonText,
  linkType = 'external',
  description,
  tag,
  Info,
  infoClick,
}: FastActionProps) => {
  const [ref, inView, _entry] = useInView({
    threshold: 0,
    rootMargin: '5% 0px -20% 0px',
    fallbackInView: true,
    triggerOnce: true,
  });

  return (
    <div className={inView ? styles.wrap : styles.wrapHidden} ref={ref}>
      {tag ? <p className={styles.tag}>{tag}</p> : <></>}
      {Info && infoClick ? (
        <div className={styles.info} onClick={infoClick}>
          <Info width={30} height={30} fill="var(--nt-green)" />
        </div>
      ) : (
        <></>
      )}
      {icon}
      <p className={styles.bigText} dangerouslySetInnerHTML={{ __html: text }}></p>
      {description ? <p dangerouslySetInnerHTML={{ __html: description }}></p> : <></>}
      <Button text={buttonText} title={buttonText} href={buttonHref} internal={linkType == 'internal'} />
    </div>
  );
};

export default Index;
