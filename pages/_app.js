import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import '../styles/global.css';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-' + process.env.NEXT_PUBLIC_GTM });
  }, []);
  return (
    <>
      <DefaultSeo
        defaultTitle={`Baca Menghapal Al-Qur'an Online | BMAO`}
        titleTemplate='%s | BMAO'
        noindex={true}
        openGraph={{
          type: 'website',
          url: process.env.NEXT_PUBLIC_MAIN_URL,
          site_name: 'BMAO',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTA}`}
      />
      <Script
        strategy='afterInteractive'
        id='config_gtag'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GTA}');
          `,
        }}
      />

      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
