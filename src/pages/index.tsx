import * as React from 'react';
import Layout from '../components/organisms/Layout';
import HeroHome from '../components/organisms/HeroHome';
import Seo from '../components/atoms/Seo';
import NaturalmenteTecnologici from '../components/molecules/NaturalmenteTecnologici';
import Theme from '../components/organisms/Theme';

const IndexPage = () => {
  return (
    <Layout>
      <HeroHome />
      <NaturalmenteTecnologici />
      <Theme />
    </Layout>
  );
};

export const Head = () => (
  <Seo
    title="Home"
    pathname="/"
    description="L'evento si propone di essere occasione di ritrovo della community di Syskrack nonché strumento di disseminazione culturale sul territorio."
  />
);

export default IndexPage;
