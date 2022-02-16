import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import { AppProvider } from '@context/AppContext';
import WrapperLayout from '@components/layouts/WrapperLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-' + process.env.NEXT_PUBLIC_GTM });
  }, []);
  return (
    <>
      <DefaultSeo
        defaultTitle={`Baca Menghapal Al-Qur'an Online | BMAO`}
        titleTemplate='%s | BMAO'
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
      <ThemeProvider attribute='class'>
        <AppProvider>
          <WrapperLayout>
            <Component {...pageProps} />
          </WrapperLayout>
        </AppProvider>
      </ThemeProvider>
      <ToastContainer />
    </>
  );
}

export default MyApp;
