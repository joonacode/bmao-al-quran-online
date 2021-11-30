import { Footer, Navbar } from '@/components';
import { Box, Container } from '@chakra-ui/layout';
import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <Box position='relative'>
      <Navbar />
      <Container maxW={1028}>{children}</Container>
      <Footer />
    </Box>
  );
};

export default MainLayout;
