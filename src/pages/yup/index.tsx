// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import { Link, Button, Flex } from "@chakra-ui/react";

type Props = {
  handleOpenModal: any;
};

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
`

const Typographe = styled.h1`
  font-size: 40px;
  font-family: 'Poppins';
  font-weight: bold;
  color: #37b275;
  @media screen and (max-width: 768px) { 
   margin-top: -10px;
  }
`

const Typographo = styled.h1`
  font-size: 20px;
  font-family: 'Poppins';
  font-weight: bold;
`

const Logo = styled.img`
 @media screen and (max-width: 768px) { 
    max-width: 50%; 
  }
`
function Yup({ handleOpenModal }: Props) {

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
      outline-color='#c5c5c5'
      color="#63b3ed"
      fontSize="1.125rem"
      fontWeight="500"
      borderRadius="6px"
      border="1px solid transparent"
      _hover={{
        borderColor: "#2a4365",
        color: "#4299e1",
      }}
      _active={{
        backgroundColor: "blue.800",
        borderColor: "blue.700",
      }}
    >
      Join our discord
    </Button>
    </Text>  
     <Flex width='80'></Flex>
     <Logo src='/turing-gradient.svg' alt='Logo'/>
    </Tow>
  </Flex> 
  )
}

export default Yup
