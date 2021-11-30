import listEndpoint from '@/apis';
import { ListVerses } from '@/components';
import { MainLayout } from '@/layouts';
import { IconButton } from '@chakra-ui/button';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BiCaretDown, BiCaretUp } from 'react-icons/bi';
import { animateScroll as scroll } from 'react-scroll';

const HomePage = ({ detailSurah, detailSurahID }) => {
  const { locale, asPath } = useRouter();
  const [scrollBtn, setScrollBtn] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const changeNav = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    if (bottom) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
    if (window.scrollY >= 80) {
      setScrollBtn(true);
    } else {
      setScrollBtn(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <NextSeo
        description={
          detailSurah.tafsir.id.length > 155
            ? detailSurah.tafsir.id.slice(0, 155) + '...'
            : detailSurah.tafsir.id
        }
        title={`${detailSurah.name.transliteration[locale.split('-')[0]]}`}
        openGraph={{
          title: `${detailSurah.name.transliteration[locale.split('-')[0]]}`,
          url: process.env.NEXT_PUBLIC_MAIN_URL + asPath,
          description:
            detailSurah.tafsir.id.length > 155
              ? detailSurah.tafsir.id.slice(0, 155) + '...'
              : detailSurah.tafsir.id,

          images: [
            {
              type: 'png',
              width: 1200,
              height: 630,
              url: process.env.NEXT_PUBLIC_MAIN_URL + '/logo.png',
              alt: 'logo',
            },
          ],
        }}
      />
      <MainLayout>
        {scrollBtn && (
          <Flex
            zIndex={9}
            direction='column'
            position='fixed'
            right={{ base: '20px', lg: '50px' }}
            bottom={{ base: '40px', lg: '70px' }}
          >
            <IconButton
              mb={3}
              shadow='md'
              colorScheme='blue'
              aria-label='Search database'
              icon={<BiCaretUp />}
              onClick={() => scroll.scrollToTop()}
            />
            {!isBottom && (
              <IconButton
                shadow='md'
                colorScheme='blue'
                aria-label='Search database'
                icon={<BiCaretDown />}
                onClick={() => scroll.scrollToBottom()}
              />
            )}
          </Flex>
        )}
        {detailSurah.preBismillah && (
          <Heading
            as='h5'
            className='fontAlQalam'
            size='xl'
            fontWeight='normal'
            textAlign='center'
            mb={10}
          >
            {detailSurah.preBismillah.text.arab}
          </Heading>
        )}
        <ListVerses verses={detailSurah.verses} versesID={detailSurahID} />
      </MainLayout>
    </>
  );
};

export default HomePage;

export async function getStaticProps(ctx) {
  if (Number(ctx.params.surahId[0]) > 114) {
    return {
      notFound: true,
    };
  }
  const response = await listEndpoint.getDetailSurat(ctx.params.surahId[0]);
  const responseTranslate = await listEndpoint.getTranslateSuratID(
    ctx.params.surahId[0],
  );

  return {
    props: {
      detailSurah: response.data.data,
      detailSurahID: responseTranslate.data,
    },
  };
}

export async function getStaticPaths() {
  const paths = Array(114)
    .fill('')
    .map((_, i) => ({ params: { surahId: [`${i + 1}`] } }));
  return {
    paths,
    fallback: 'blocking',
  };
}
