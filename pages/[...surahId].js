import listEndpoint from '@/apis';
import { ListVerses } from '@/components';
import { MainLayout } from '@/layouts';
import list_surah from '@/list_surah';
import { Button, IconButton } from '@chakra-ui/button';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BiCaretDown, BiCaretUp } from 'react-icons/bi';
import { animateScroll as scroll, scroller } from 'react-scroll';
import Link from 'next/link';
import { Tag } from '@chakra-ui/tag';
import { Spinner } from '@chakra-ui/react';
import { Modal } from '@chakra-ui/react';

const HomePage = ({ detailSurah }) => {
  const [detailSurahID, setDetailSurahId] = useState({
    data: [],
    isLoading: true,
  });
  const { locale, asPath, query, isFallback } = useRouter();
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
    if (window.scrollY >= 300) {
      setScrollBtn(true);
    } else {
      setScrollBtn(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);
  const handleSearch = (v) => {
    scroller.scrollTo(`${v}`, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -110,
    });
  };

  useEffect(() => {
    const getTranslate = async (param) => {
      const responseTranslate = await listEndpoint.getTranslateSuratID(param);
      setDetailSurahId({
        data: responseTranslate.data,
        isLoading: false,
      });
    };

    if (locale === 'id' && query.hasOwnProperty('surahId')) {
      getTranslate(query.surahId[0]);
    }
  }, [locale, query]);

  if (isFallback) {
    return (
      <Modal closeOnOverlayClick={false} isOpen={true}>
        <Flex height={'100vh'} justifyContent='center' alignItems='center'>
          <Spinner size='xl' />
        </Flex>
      </Modal>
    );
  }
  return (
    <>
      <NextSeo
        description={
          detailSurah.tafsir.id.length > 155
            ? detailSurah.tafsir.id.slice(0, 155) + '...'
            : detailSurah.tafsir.id
        }
        title={`${detailSurah.name.transliteration[locale]}`}
        openGraph={{
          locale: locale,
          title: `${detailSurah.name.transliteration[locale]}`,
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
              url: process.env.NEXT_PUBLIC_MAIN_URL + 'logo.png',
              alt: 'logo',
            },
          ],
        }}
      />

      <MainLayout
        handleSearch={handleSearch}
        totalAyat={detailSurah.numberOfVerses}
      >
        <Flex justifyContent='center' flexWrap={'wrap'} w='full' mb={10}>
          <Tag mr={3} mt={2}>
            {detailSurah.name.transliteration[locale]} -{' '}
            {detailSurah.name.translation[locale]}
          </Tag>
          <Tag mr={3} mt={2}>
            {detailSurah.numberOfVerses} Ayat
          </Tag>
          <Tag mt={2}>{detailSurah.revelation[locale]}</Tag>
        </Flex>
        {detailSurah.preBismillah && (
          <Heading
            as='h5'
            className='fontAlQalam'
            size='2xl'
            fontWeight='normal'
            textAlign='center'
            mb={10}
          >
            {detailSurah.preBismillah.text.arab}
          </Heading>
        )}
        <ListVerses detailSurah={detailSurah} versesID={detailSurahID} />
        <Flex mt={20} justifyContent='space-between' alignItems='center'>
          {Number(query.surahId[0]) > 1 && (
            <Link
              href={`/${Number(query.surahId[0]) - 1}`}
              locale={locale}
              passHref
            >
              <Button
                mr='auto'
                leftIcon={<ArrowBackIcon />}
                colorScheme='teal'
                variant='outline'
              >
                {
                  list_surah.find(
                    (sura) => sura.number === Number(query.surahId[0]) - 1,
                  ).name.transliteration[locale]
                }{' '}
              </Button>
            </Link>
          )}
          {Number(query.surahId[0]) < 114 && (
            <Link
              href={`/${Number(query.surahId[0]) + 1}`}
              locale={locale}
              passHref
            >
              <Button
                ml='auto'
                rightIcon={<ArrowForwardIcon />}
                colorScheme='teal'
                variant='outline'
              >
                {
                  list_surah.find(
                    (sura) => sura.number === Number(query.surahId[0]) + 1,
                  ).name.transliteration[locale]
                }
              </Button>
            </Link>
          )}
        </Flex>
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
  return {
    props: {
      detailSurah: response.data.data,
    },
    revalidate: 604800,
  };
}

export async function getStaticPaths() {
  const paths = Array(114)
    .fill('')
    .map((_, i) => ({ params: { surahId: [`${i + 1}`] } }));
  return {
    paths,
    fallback: true,
  };
}
