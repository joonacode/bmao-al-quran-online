import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Tag } from '@chakra-ui/react';
const SuratItem = ({ data }) => {
  const { locale } = useRouter();
  return (
    <Link href={`/${data.number}`} locale={locale.split('-')[0]}>
      <a>
        <Box shadow='md' px={5} py={5} borderRadius='md'>
          <Flex alignItems='center'>
            <Text mr={4} fontWeight='bold'>
              {data.number}.
            </Text>
            <Box w='full'>
              <Flex flex={1} alignItems='center' justifyContent='space-between'>
                <Text fontWeight='medium'>
                  {data.name.transliteration[locale.split('-')[0]]}
                </Text>
                <Text>{data.name.short}</Text>
              </Flex>
              <Flex alignItems='center' mt={3}>
                <Tag size='sm' colorScheme='green' mr={2}>
                  {data.revelation[locale.split('-')[0]]}
                </Tag>
                <Tag size='sm' colorScheme='teal'>
                  {' '}
                  {data.numberOfVerses} Ayat
                </Tag>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </a>
    </Link>
  );
};

export default SuratItem;
