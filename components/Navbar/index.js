import React from 'react';
import { Container, Box, Heading, Flex } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { ButtonTheme } from '..';
import Link from 'next/link';
const Navbar = () => {
  const bg = useColorModeValue('white', 'gray.900');
  return (
    <Box
      position='sticky'
      top={0}
      zIndex={10}
      bg={bg}
      shadow='sm'
      py={5}
      mb={10}
    >
      <Container maxW={1028}>
        <Flex justifyContent='space-between' alignItems='center'>
          <Link href='/'>
            <a>
              <Heading
                title="Baca Menghapal Al-Qur'an Online"
                as='h1'
                size='md'
              >
                BMAO
              </Heading>
            </a>
          </Link>

          <ButtonTheme />
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
