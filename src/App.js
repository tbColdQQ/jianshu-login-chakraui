import React from 'react'
import { Image, Box, useColorModeValue, Flex } from '@chakra-ui/react'
import LogoLightImg from './assets/images/logo-light.png'
import LogoDarkImg from './assets/images/logo-light.png'

function App() {

  const bgColor = useColorModeValue('#F1F1F1', 'black')
  const logoImg = useColorModeValue(LogoLightImg, LogoDarkImg)
  const imgProps = {
    pos: 'absolute',
    top: '56px',
    left: '50px'
  }
  const contentBox = {
    w: '820px',
    h: '600px',
    pos: 'relative',
    m: '0 auto',
    bgGradient: 'url(//cdn2.jianshu.io/assets/web/sign_in_bg-bbc515a9c2e7734807ea281b9b2ab380.png)',
    bgRepeat: 'no-repeat',
    bgSize: '40%',
    bgPos: '45px 0'
  }

  return (
    <Box w="100%" h="100%" bgColor={bgColor}>
      <Image src={logoImg} w='100px' {...imgProps}/>
      <Flex flexDirection="column" align="center" h="100%">
        <Box {...contentBox}></Box>
      </Flex>
    </Box>
  );
}

export default App;
