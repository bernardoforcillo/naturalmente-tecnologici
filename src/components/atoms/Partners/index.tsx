import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './index.module.scss';
import Heading from '../Heading';
import Syskrack from '../../../assets/syskrack.svg';
import IBM from '../../../assets/partner/IBM.svg';
import ShowOnView from '../ShowOnView';

const Index = () => {
  return (
    <div className={styles.partners}>
      <Heading text="Powered By" />
      <ShowOnView className={styles.wrap}>
        <a href="https://www.syskrack.org/" rel="noopener noreferrer" title="Syskrack" target="_blank">
          <Syskrack className={styles.logo} width={180} />
        </a>
        <h4>
          Selezioniamo partner che hanno voglia di investire nella cultura e nello sviluppo delle persone e del
          territorio e di accettare la nostra sfida collettiva.
          <br />
          Vogliamo un'esperienza di impatto positivo e di risonanza nella community e sul luogo.
        </h4>
      </ShowOnView>
      <Heading text="Community Partner" />
      <ShowOnView className={styles.wrap}>
        {/*<a href="http://www.hackability.it/" rel="noopener noreferrer" target="_blank">
          <StaticImage
            layout="constrained"
            src="../../../images/partners/hackability.jpg"
            className={styles.logo}
            alt="Hackability"
            width={180}
          />
        </a>*/}
        {/* <a href="" rel="noopener noreferrer" title="Potenza Urban Art" target="_blank"> */}
        <StaticImage
          layout="constrained"
          src="../../../images/partners/potenza_urban_art.jpg"
          className={styles.logo}
          alt="Potenza Urban Art"
          width={180}
        />
        {/* </a> */}
        <a href="https://www.ashoka.org" title="Ashoka" rel="noopener noreferrer" target="_blank">
          <StaticImage
            layout="constrained"
            src="../../../images/partners/ashoka.jpg"
            className={styles.logo}
            alt="Potenza Urban Art"
            width={180}
          />
        </a>
      </ShowOnView>
      <Heading text="Activity Partner" />
      <ShowOnView className={styles.wrap}>
        <a href="https://skillsbuild.org/" title="IBM" rel="noopener noreferrer" target="_blank">
          <IBM className={styles.logoHorizontal} height={40} />
        </a>
      </ShowOnView>
      <Heading text="Media Partner" />
      <ShowOnView className={styles.wrap}>
        <a href="https://border-radio.it/" title="Border Radio" rel="noopener noreferrer" target="_blank">
          <StaticImage
            layout="constrained"
            src="../../../images/partners/border-radio.png"
            className={styles.logo}
            alt="Border Radio"
            width={180}
          />
        </a>
      </ShowOnView>
    </div>
  );
};

export default Index;
