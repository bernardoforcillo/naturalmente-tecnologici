import React from 'react';
import { SeoProps } from './index.types';
import useSiteMetadata from '../../../hooks/useSiteMetadata';

const Index = ({ lang, title, description, pathname, children }: SeoProps) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata();

  const seo = {
    title: title ? title + ' | ' + defaultTitle : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    // twitterUsername,
  };

  return (
    <>
      <html lang={lang} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:locale" content={'it_IT'} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content={'image/jpg'} />
      <meta property="og:image:alt" content={seo.title} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content={'1200'} />
      <meta property="og:image:height" content={'630'} />
      <meta property="og:url" content={`https://nt22.syskrack.org`} />
      <meta property="og:site_name" content={seo.title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={'website'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {/* <meta name="twitter:creator" content={seo.twitterUsername} /> */}
      {children}
    </>
  );
};

export default Index;
