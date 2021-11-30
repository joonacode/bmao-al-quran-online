import React from 'react';
import { Container, Box, Text, Flex, Select } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  const bg = useColorModeValue('gray.100', 'gray.900');
  const handleChange = (e) => {
    router.push(router.asPath, router.asPath, { locale: e.target.value });
  };
  return (
    <Box bg={bg} shadow='sm' py={5} mt={20}>
      <Container
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        maxW={1028}
      >
        <Link href='https://github.com/joonacode'>
          <a>
            <Text fontWeight='bold' cursor='pointer'>
              &copy; JoonaCode
            </Text>
          </a>
        </Link>
        <Flex alignItems='center'>
          <Select
            onChange={handleChange}
            size='xs'
            border='none'
            focusBorderColor='none'
            defaultValue={router.locale === 'id' ? 'id' : 'en'}
          >
            <option value='id'>Indonesia</option>
            <option value='en'>Inggris</option>
          </Select>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
