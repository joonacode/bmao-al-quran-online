import listEndpoint from '@api';
import { Badge } from '@components/common';
import { LoadingOverlay, PrevNextSurah, VerseList } from '@components/features';
import { IResDetailSurah, ITranslateSurahId } from '@constants/types';
import { DetailSurahContext } from '@context/DetailSurahContext';
import getLocale from '@utils/getLocale';
import getSurahId from '@utils/getSurahId';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useMemo } from 'react';
interface DetailSurahProps {
  detailSurah: IResDetailSurah;
  translateId: ITranslateSurahId[];
}

const DetailSurah: NextPage<DetailSurahProps> = ({ detailSurah, translateId }) => {
  const { changeTotalAyat, changeSurahId } = useContext(DetailSurahContext);
  const { locale: localeRouter, isFallback, asPath } = useRouter();
  const locale = useMemo(() => {
    return getLocale(localeRouter);
  }, [localeRouter]);
  useEffect(() => {
    changeTotalAyat(detailSurah?.numberOfVerses);
    changeSurahId(detailSurah?.number);
  }, [detailSurah, changeTotalAyat, changeSurahId]);

  if (isFallback) {
    return <LoadingOverlay />;
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
      <div className='flex items-center justify-center gap-3 flex-wrap mt-5 mb-10'>
        <Badge
          title={`${detailSurah.name.transliteration[locale]} - ${detailSurah.name.translation[locale]}`}
        />
        <Badge title={`${detailSurah.numberOfVerses} Ayat`} />
        <Badge title={`${detailSurah.revelation[locale]}`} />
      </div>
      <h5 className='font-normal mb-16 text-center fontAlQalam text-5xl'>
        {detailSurah?.preBismillah?.text.arab}
      </h5>
      <VerseList detailSurah={detailSurah} verseId={translateId} />
      <PrevNextSurah locale={locale} surahId={detailSurah.number} />
    </>
  );
};

export default DetailSurah;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const surahId = getSurahId(ctx.params?.surahId);
  console.log('SURAH ID SERVER', surahId);
  if (surahId > 114) {
    return {
      notFound: true,
    };
  }
    const response = await listEndpoint.getDetailSurat(`${surahId}`);
    const responseTranslate = await listEndpoint.getTranslateSuratID(`${surahId}`);
    return {
      props: {
        detailSurah: response.data.data,
        translateId: responseTranslate.data,
      },
      revalidate: 604800,
    };
};

export async function getStaticPaths() {
  const paths = Array(114)
    .fill('')
    .map((_, i) => ({ params: { surahId: [`${i + 1}`] } }));
  return {
    paths,
    fallback: true,
  };
}
