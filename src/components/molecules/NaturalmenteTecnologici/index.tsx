import React from 'react';

import * as styles from './index.module.scss';
import Heading from '../../atoms/Heading';
import Section from '../Section';
import Bug from '../../../assets/bug.svg';
import Insects from '../../../assets/insects.svg';
import { info } from '../../../utilities/naturalmenteTecnologici';
import whatIs from '../../../utilities/whatIs';
import SingleSection from '../../atoms/SingleSection';
import Button from '../../atoms/Button';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.singleSectionsWrap}>
        {whatIs.map((item, key) => (
          <div className={styles.singleSections} style={item.big ? {} : { maxWidth: '500px' }} key={key}>
            <Heading text={item.name} />
            <SingleSection>
              <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
              {item.eventbrite ? (
                <Button text={'Riserva il tuo posto qui!'} href="#top" title={'Riserva il tuo posto qui!'}></Button>
              ) : (
                <></>
              )}
            </SingleSection>
          </div>
        ))}
      </div>
      {info.map((item, key) => {
        return (
          <Section
            title={item.title}
            text={item.text}
            reversed={key % 2 == 1}
            key={key}
            Svg={key % 2 == 0 ? Bug : Insects}
            svgStyle={item.svgStyle}
          />
        );
      })}
    </div>
  );
};

export default Index;
