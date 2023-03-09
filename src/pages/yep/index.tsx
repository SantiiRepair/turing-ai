// @ts-nocheck
import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link, Button, Flex } from "@chakra-ui/react";

type Props = {
  handleOpenModal: any;
};

const translate = keyframes`
  from {
    transform: translateY(10px);
  } to {
    transform: translateY(-10px);
  } 
`

const Text = styled.div`
 margin-top: 35px; 
 flex-direction: column;
 color: #fff;
 @media screen and (max-width: 768px) { 
    text-align: center;
  }
`

const Tow = styled.div` 
 display: flex;
 flex-direction: row;
 justify-content: center;
 transform: translateY(60px);
  @media screen and (max-width: 768px) { 
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`

const Typography = styled.h1`
  font-size: 40px;
  font-family: 'Poppins';
  font-weight: bold;
  @media screen and (max-width: 768px) { 
    font-size: 34px;
  }
`

const Typographe = styled.h1`
  font-size: 40px;
  font-family: 'Poppins';
  font-weight: bold;
  color: #37b275;
  @media screen and (max-width: 768px) { 
   font-size: 35px;
   margin-top: -20px;
  }
`

const Typographo = styled.h1`
  font-size: 20px;
  font-family: 'Poppins';
  font-weight: bold;
`

const Logo = styled.img`
 animation: ${translate} 5s alternate infinite;
 @media screen and (max-width: 768px) { 
    max-width: 50%; 
  }
`

function Yep({ handleOpenModal }: Props) {

 return (
  <Flex
  flexDirection='column'
  display='flex'
  alignItems='center'
  minH='100vh'
  >
   <Tow>
    <Text>
     <Typography>Turing AI is the best</Typography>
     <Typographe>way to use AIs</Typographe>
     <span/>
     <Typographo>
       Turing AI / our mission is to bring the 
     </Typographo>
     <Typographo>
       most powerfull AIs to the mass public for free
     </Typographo>
      <Button
      fontFamily='Poppins'
      bgColor='transparent'
      mt='20'
      mb='3'
      height='2.5rem'
      minWidth='12.5rem'
      outline='1px solid'
      outlineColor='#ffffff'
      color="#ffffff"
      fontSize="1.125rem"
      fontWeight="500"
      borderRadius="6px"
      border="1px solid transparent"
      _hover={{
        borderColor: "#9c9c9c",
        color: "#9c9c9c",
      }}
      _active={{
        backgroundColor: "#9c9c9c",
        borderColor: "#9c9c9c",
      }}
    >
      Join our discord
    </Button>
    </Text>  
     <Flex width='80px'></Flex>
     <Logo src='/turing-gradient.svg' alt='Logo'/>
    </Tow>
  </Flex> 
 ) 
}

export default Yep
