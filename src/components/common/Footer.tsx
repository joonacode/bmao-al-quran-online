import getLocale from '@utils/getLocale';
import { useRouter } from 'next/router';
import React from 'react';
import Container from './Container';

const Footer: React.FC = () => {
  const { push, asPath, locale: localeRouter } = useRouter();
  const locale = getLocale(localeRouter);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    push(asPath, asPath, { locale: e.target.value });
  };
  return (
    <footer
      id='footer'
      className={`${
        asPath === '/' ? 'mb-0' : 'mb-[70px]'
      } sm:mb-0 shadow-sm py-5 border-t-[1px] border-t-gray-200 dark:border-t-gray-700 bg-white dark:bg-custom-primary`}
    >
      <Container className='flex items-center justify-between'>
        <p>&copy; JoonaCode</p>
        <select onChange={handleChange} defaultValue={locale === 'id' ? 'id' : 'en'}>
          <option value='id'>Indonesia</option>
          <option value='en'>English</option>
        </select>
      </Container>
    </footer>
  );
};

export default Footer;
