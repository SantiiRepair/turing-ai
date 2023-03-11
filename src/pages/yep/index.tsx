// @ts-nocheck
import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link, Flex } from "@chakra-ui/react";

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
    margin-top: -8%;
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
  letter-spacing: 1px;
  font-size: 55px;
  font-family: 'Poppins';
  font-weight: bold;
  @media screen and (max-width: 768px) { 
    font-size: 34px;
  }
`

const Typographe = styled.h1`
  letter-spacing: 1px;
  font-size: 40px;
  margin-top: -40px;
  font-family: 'Poppins';
  font-weight: bold;
  background: -webkit-linear-gradient(#b2f8f3, #1c847d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
 width: 310px;
 animation: ${translate} 5s alternate infinite;
 @media screen and (max-width: 768px) { 
    max-width: 100%;
  }
`

const Button = styled.button`
   font-family: 'Poppins';
   background-color: transparent;
   background: transparent;
   height: 2.68rem;
   min-width: 12rem;
   outline: 1px solid;
   outline-color: #fff;
   color: #fff;
   font-size: 1.125rem;
   font-weight: 500;
   border-radius: 6px;
   border: 1px solid transparent;
   @media screen and (max-width: 768px) { 
    height: 3.5rem;
    min-width: 17.5rem;
    font-size: 1.85rem;
   }
`


function Yep() {

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
     <Button>
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
