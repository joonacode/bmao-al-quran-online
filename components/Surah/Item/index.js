import { Box, Flex, Text } from '@chakra-ui/layout';
import { Button, IconButton } from '@chakra-ui/button';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Tag } from '@chakra-ui/react';
import { FcInfo } from 'react-icons/fc';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react';
import { BiInfoCircle } from 'react-icons/bi';
const SuratItem = ({ data }) => {
  const { locale } = useRouter();
  return (
    <Box shadow='md' px={5} py={5} borderRadius='md'>
      <Flex alignItems='center'>
        <Text mr={4} fontWeight='bold'>
          {data.number}.
        </Text>
        <Box w='full'>
          <Link href={`/${data.number}`} locale={locale}>
            <a>
              <Flex flex={1} alignItems='center' justifyContent='space-between'>
                <Text fontWeight='medium'>
                  {data.name.transliteration[locale]}
                </Text>
                <Text>{data.name.short}</Text>
              </Flex>
            </a>
          </Link>
          <Flex justifyContent='space-between' alignItems='center' mt={3}>
            <Link href={`/${data.number}`} locale={locale}>
              <a>
                <Box>
                  <Tag size='sm' colorScheme='green' mr={2}>
                    {data.revelation[locale]}
                  </Tag>
                  <Tag size='sm' colorScheme='teal' mr={2}>
                    {data.numberOfVerses} Ayat
                  </Tag>
                </Box>
              </a>
            </Link>
            <Popover>
              <PopoverTrigger>
                <IconButton
                  _focus='none'
                  zIndex={8}
                  fontSize='20px'
                  colorScheme='none'
                  size='xs'
                  aria-label='Info'
                  icon={<FcInfo />}
                />
              </PopoverTrigger>
              <PopoverContent _focus='none'>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Tafsir</PopoverHeader>
                <PopoverBody>{data.tafsir.id}</PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default SuratItem;
