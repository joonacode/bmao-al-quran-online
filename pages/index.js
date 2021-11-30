import listEndpoint from '@/apis';
import { ListSurah } from '@/components';
import { MainLayout } from '@/layouts';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React from 'react';

const HomePage = ({ listSurat }) => {
  const { locale } = useRouter();
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
      <MainLayout>
        <ListSurah data={listSurat} />
      </MainLayout>
    </>
  );
};

export default HomePage;

export async function getStaticProps(ctx) {
  const response = await listEndpoint.getListSurat();
  return {
    props: {
      listSurat: response.data.data,
    },
  };
}
