import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import * as styles from './index.module.scss';
import { NavigationProps } from './index.types';
import { links } from '../../../utilities/navigation';
import MultipleLinks from '../../atoms/MultipleLinks';
import { isBrowser } from '../../../utilities/browser';

const Index = ({ opened, onClick }: NavigationProps) => {
  const [pathname, setPathname] = useState<string>();
  const removeSlashes = (text?: string) => (text ? text.replace(/\//g, '') : '');

  useEffect(() => {
    if (isBrowser()) setPathname(window.location.pathname);
  }, []);

  const linkElements = links.map((link, key) => {
    if (link.hide) return;
    if (link.multiple)
      return (
        <MultipleLinks name={link.name} key={key} active={pathname?.split('/')[1] === link.name.toLowerCase()}>
          {link.links.map((l, key) => (
            <Link
              key={key}
              className={styles.link}
              style={removeSlashes(pathname) === removeSlashes(l.to) ? { color: 'var(--nt-orange)' } : {}}
              to={l.to}
              onClick={onClick}
              title={l.name}
            >
              {l.name}
            </Link>
          ))}
        </MultipleLinks>
      );
    return (
      <Link
        key={key}
        className={styles.link}
        style={removeSlashes(pathname) === removeSlashes(link.to) ? { color: 'var(--nt-orange)' } : {}}
        to={link.to ?? ''}
        onClick={onClick}
        title={link.name}
      >
        {link.name}
      </Link>
    );
  });

  return (
    <>
      <div
        className={styles.wrapMobile}
        style={opened ? { transform: 'translate(0, 0)', opacity: 1 } : { transform: 'translate(0, -100%)', opacity: 0 }}
      >
        <nav className={styles.linksMobile}>
          {linkElements}
          <Link title="Partecipa all' evento" to={'/#biglietti'} className={styles.buttonMobile} onClick={onClick}>
            PARTECIPA
          </Link>
        </nav>
      </div>
      <div className={styles.wrapDesktop}>
        <nav className={styles.links}>{linkElements}</nav>
        <Link title="Partecipa all' evento" to={'/#biglietti'} className={styles.button} onClick={onClick}>
          PARTECIPA
        </Link>
      </div>
    </>
  );
};

export default Index;
