import React, { useState } from 'react'
import { Image, Box, useColorModeValue, Flex, Button} from '@chakra-ui/react'
import RightForm from './components/Form'
import LogoLightImg from './assets/images/logo-light.png'
import LogoDarkImg from './assets/images/logo-light.png'

function App() {

  const [isBigQrCodeShow, setIsQrCodeShow] = useState(false)

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
  const btnGroupFlex = {
    pos: 'absolute',
    top: '452px',
    left: '60px'
  }
  const downloadBtn = {
    display: 'block',
    w: '252px',
    h: '46px',
    mr: '15px',
    bgColor: '#ea6f5a',
    color: 'white',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '46px',
    borderRadius: '30px',
    cursor: 'pointer',
    textAlign: 'center',
    _hover: {
      bgColor: '#ea6f5a'
    },
    _focus: {
      outline: 'none',
      textDecoration: 'none'
    }
  }
  const qrcodeBox = {
    w: '46px',
    h: '46px',
    pos: 'relative',
    borderRadius: '5px',
    bgGradient: 'url(//cdn2.jianshu.io/assets/web/login_page_download-791aa73fa61f50db586c09156c6242cf.png)',
    bgSize: '38px',
    bgRepeat: 'no-repeat',
    bgColor: 'white',
    bgPos: '4px 4px',
    cursor: 'pointer'
  }
  const bigQrCodeBox = {
    w: '160px',
    h: '160px',
    bgColor: 'white',
    pos: 'absolute',
    top: '-185px',
    left: '-100px',
    borderRadius: '10px',
    bgGradient: 'url(//cdn2.jianshu.io/assets/web/login_page_download-791aa73fa61f50db586c09156c6242cf.png)',
    bgSize: '132px',
    bgPos: '50%',
    bgRepeat: 'no-repeat',
    zIndex: 10,
    boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.15)',
    _before: {
      content: `''`,
      display: 'block',
      pos: 'absolute',
      w: '33px',
      h: '16px',
      bottom: '-16px',
      right: '14px',
      bgColor: 'white',
      clipPath: 'polygon(0 0,50% 100%,100% 0)'
    }
  }

  const handleHoverActive = () => {
    setIsQrCodeShow(true)
  }

  const handleHoverDisabled = () => {
    setIsQrCodeShow(false)
  }

  return (
    <Box w="100%" h="100%" bgColor={bgColor}>
      <Image src={logoImg} w='100px' {...imgProps}/>
      <Flex flexDirection="column" justifyContent="center" h="100%">
        <Box {...contentBox}>
          <Flex {...btnGroupFlex}>
            <Button {...downloadBtn} as="a" href="https://www.jianshu.com/apps?%20utm_medium=desktop&utm_source=sign_in_page_click">下载简书APP</Button>
            <Box {...qrcodeBox} onMouseEnter={handleHoverActive} onMouseLeave={handleHoverDisabled}>
              <Box {...bigQrCodeBox} display={isBigQrCodeShow ? 'block' : 'none'}/>
            </Box>
          </Flex>
          <Box float="right">
            <RightForm />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
