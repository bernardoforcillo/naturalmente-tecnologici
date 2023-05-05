import React from 'react';
import * as styles from './index.module.scss';
import BigBranch from '../../../assets/big-branch.svg';
import Colli from '../../../assets/colli.svg';
import Collina from '../../../assets/collina.svg';
import Flower from '../../atoms/Flower';
import FastActions from '../../molecules/FastActions';
import Banner from '../../atoms/Banner';
import SocialLinks from '../../molecules/SocialLinks';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <BigBranch width="555" height="282" className={styles.bigBranch} />
      <div className={styles.headWrap}>
        <p className={styles.date}>11-13 Agosto 2023</p>
        <h1 className={styles.heading}>
          RI-PRENDIAMOCI IL FUTURO <br />3 GIORNI DI ARTE, INNOVAZIONE TECNOLOGICA E SOCIALE
        </h1>
        <div className={styles.orangeFlowers}>
          <Flower color="var(--nt-orange)" />
          <Flower color="var(--nt-orange)" />
          <Flower color="var(--nt-orange)" />
          <Flower color="var(--nt-orange)" />
        </div>
        <Colli width="1440" height="185" className={styles.colli} />
        <div className={styles.white}></div>
      </div>
      {/* <FastActions /> */}
      <div className={styles.notReleased}>
        <h2>I biglietti non sono ancora stati rilasciati</h2>
        <h3>Seguici sui social per rimanere aggiornato</h3>
        <SocialLinks green onlySocial />
        <p></p>
      </div>
      <div className={styles.wrapHill}>
        <div className={styles.greenFlowers}>
          <Flower color="var(--nt-green)" />
          <Flower color="var(--nt-green)" />
          <Flower color="var(--nt-green)" />
        </div>
        <Collina width="1440" height="64" className={styles.collina} />
        <div className={styles.green}></div>
      </div>
    </div>
  );
};

export default Index;
