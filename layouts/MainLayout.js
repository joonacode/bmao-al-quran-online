import { Footer, Navbar } from '@/components';
import { Box, Container } from '@chakra-ui/layout';
import React from 'react';

const MainLayout = ({ resetSearch, handleSearch, totalAyat, children }) => {
  return (
    <Box position='relative'>
      <Navbar
        handleSearch={handleSearch}
        totalAyat={totalAyat}
        resetSearch={resetSearch}
      />
      <Container maxW={1028}>{children}</Container>
      <Footer />
    </Box>
  );
};

export default MainLayout;
