import { Button, IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import React from 'react';

const ButtonTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      size='sm'
      colorScheme='blue'
      aria-label='Search database'
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    />
  );
};

export default ButtonTheme;
