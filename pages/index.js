import listEndpoint from '@/apis';
import { ListSurah } from '@/components';
import { MainLayout } from '@/layouts';
import list_surah from '@/list_surah';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const HomePage = () => {
  const { locale } = useRouter();
  const [listSurah, setListSurah] = useState(list_surah);
  const handleSearch = (value) => {
    if (value.length === 0) {
      setListSurah(list_surah);
    } else {
      const filteredData = list_surah.filter((item) =>
        item.name.transliteration[locale]
          .toLowerCase()
          .split('-')
          .join(' ')
          .includes(value),
      );
      setListSurah(filteredData);
    }
  };
  const resetSearch = () => {
    setListSurah(list_surah);
  };
  return (
    <>
      <NextSeo
        description="BMAO merupakan website untuk Membaca, Menghapal, Mendengarkan Al-Qur'an secara online"
        openGraph={{
          locale: locale,
          title: "Baca Menghapal Al-Qur'an Online",
          url: process.env.NEXT_PUBLIC_MAIN_URL,
          description:
            "BMAO merupakan website untuk Membaca, Menghapal, Mendengarkan Al-Qur'an secara online",
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
      <MainLayout resetSearch={resetSearch} handleSearch={handleSearch}>
        <ListSurah data={listSurah} />
      </MainLayout>
    </>
  );
};

export default HomePage;

// uncomment if you don't use static file for list surat
// export async function getStaticProps() {
//   const response = await listEndpoint.getListSurat();
//   return {
//     props: {
//       listSurat: response.data.data,
//     },
//   };
// }
