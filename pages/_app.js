import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import '../styles/global.css';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';

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
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
