import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

function Seo({ description, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author {
              name
              social {
                email
                github
                linkedIn
                homepage
              }
            }
            ogImage
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  
  // JSON-LD 구조화된 데이터
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.siteMetadata.author.name,
    url: site.siteMetadata.siteUrl,
    logo: `${site.siteMetadata.siteUrl}${site.siteMetadata.ogImage}`,
    description: site.siteMetadata.description,
    email: site.siteMetadata.author.social.email,
    sameAs: [
      site.siteMetadata.author.social.github,
      site.siteMetadata.author.social.linkedIn,
      site.siteMetadata.author.social.homepage,
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.siteMetadata.title,
    url: site.siteMetadata.siteUrl,
    description: site.siteMetadata.description,
    publisher: {
      '@type': 'Organization',
      name: site.siteMetadata.author.name,
    },
  };

  return (
    <Helmet
      htmlAttributes={{ lang: 'ko' }}
      title={title}
      defaultTitle={site.siteMetadata.title}
      meta={[
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:site_title`,
          content: title,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: 'og:author',
          content: site.siteMetadata.author.name,
        },
        {
          property: 'og:image',
          content: site.siteMetadata.ogImage,
        },

        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `naver-site-verification`,
          content: `beba24870ac48f446a8137554ca9a52b376af7c3`,
        },
      ]}
    >
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
}

export default Seo;
