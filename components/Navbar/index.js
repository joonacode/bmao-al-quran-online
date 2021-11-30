import React, { useState } from 'react';
import { Container, Box, Heading, Flex } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { ButtonTheme } from '..';
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Select,
} from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/button';

import Link from 'next/link';
import { useRouter } from 'next/router';
const Navbar = ({ handleSearch, resetSearch, totalAyat }) => {
  const { asPath } = useRouter();
  const bg = useColorModeValue('white', 'gray.900');
  const [searchBySurah, setSearchBySurah] = useState({
    status: false,
    value: '',
  });

  const toggleSearch = () => {
    setSearchBySurah((prev) => ({ ...prev, status: !prev.status }));
  };

  return (
    <Box
      position='sticky'
      top={0}
      zIndex={100}
      bg={bg}
      shadow='sm'
      py={5}
      mb={10}
    >
      <Container maxW={1028} position='relative'>
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
          <Flex alignItems='baseline'>
            {asPath !== '/' && (
              <Select
                mr={4}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder='Filter by ayat'
                size='xs'
                border='none'
                focusBorderColor='none'
              >
                {Array(totalAyat)
                  .fill('')
                  .map((_, i) => (
                    <option key={i} value={i + 1}>
                      Ayat {i + 1}
                    </option>
                  ))}
              </Select>
            )}
            {asPath === '/' && (
              <IconButton
                mr={3}
                size='sm'
                colorScheme='teal'
                aria-label='Search database'
                icon={searchBySurah.status ? <CloseIcon /> : <SearchIcon />}
                onClick={toggleSearch}
              />
            )}
            <ButtonTheme />
          </Flex>
        </Flex>
        {searchBySurah.status && (
          <Box
            pos='absolute'
            left={0}
            top={'60px'}
            right={0}
            px={4}
            w='full'
            maxW={1028}
          >
            <InputGroup size='md' background={bg}>
              <Input
                onChange={(e) => {
                  setSearchBySurah({
                    ...searchBySurah,
                    value: e.target.value,
                  });
                  handleSearch(e.target.value.toLowerCase());
                }}
                pr='4.5rem'
                type={'text'}
                placeholder='Cari berdasarkan nama surat'
                value={searchBySurah.value}
              />
              {searchBySurah.value.length > 0 && (
                <InputRightElement width='4.5rem'>
                  <Button
                    onClick={() => {
                      resetSearch();
                      setSearchBySurah({
                        ...searchBySurah,
                        value: '',
                      });
                    }}
                    h='1.75rem'
                    size='sm'
                  >
                    Delete
                  </Button>
                </InputRightElement>
              )}
            </InputGroup>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;
