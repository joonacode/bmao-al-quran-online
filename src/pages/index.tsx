import { SurahList } from '@components/features';
import { NextPage } from 'next';
import list_surah from '@utils/data/list_surah';
import { useContext } from 'react';
import { AppContext } from '@context/AppContext';
import { useRouter } from 'next/router';
import getLocale from '@utils/getLocale';
import { NextSeo } from 'next-seo';

const HomePage: NextPage = () => {
  const { search } = useContext(AppContext);
  const { locale: localeRouter } = useRouter();
  const locale = getLocale(localeRouter);

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
      <SurahList
        data={
          search.length === 0
            ? list_surah
            : list_surah.filter((item) =>
                item.name.transliteration[locale]
                  .replace(/[-]/g, ' ')
                  .replace(/[^a-zA-Z ]/g, '')
                  .toLowerCase()
                  .split('-')
                  .join(' ')
                  .includes(search.toLowerCase()),
              )
        }
      />
    </>
  );
};

export default HomePage;
