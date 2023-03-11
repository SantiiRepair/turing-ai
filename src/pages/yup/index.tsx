// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import { Link, Flex, Box } from "@chakra-ui/react";

const Text = styled.div`
 margin-left: 30px;
 margin-top: 25px; 
 flex-direction: column;
 color: #fff;
 @media screen and (max-width: 768px) {
    margin-left: 0px;
    margin-top: 0px; 
    align-items: center;
    justify-content: center;
  }
`

const Tow = styled.div` 
 display: flex;
 flex-direction: row;
 justify-content: center;
 transform: translateY(10px);
 @media screen and (max-width: 768px) { 
    transform: translateY(0px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Tew = styled.div` 
 flex-direction: row;
 display: -webkit-inline-box;
 justify-content: center;
 margin-top: 50px;
  @media screen and (max-width: 768px) { 
    margin-bottom: 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Tom = styled.div` 
 align-items: center;
 display: flex;
 flex-direction: column;
 justify-content: center;
  @media screen and (max-width: 768px) { 
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Par = styled.div` 
 align-items: baseline;
 display: flex;
 flex-direction: row;
 height: 18%;
 justify-content: center;
 @media screen and (max-width: 900px) { 
   align-items: center;
   flex-direction: column;
   height: 130px;
 }
`

const Typography = styled.h1`
  letter-spacing: 1px;
  color: #fff;
  font-size: 30px;
  font-family: 'Poppins';
  font-weight: bold;
`

const Online = styled.h1`
  letter-spacing: 1.5px;
  color: #fff;
  font-size: 35px;
  font-family: 'Poppins';
  font-weight: bold;
`

const Laun = styled.h1`
  color: #fff;
  letter-spacing: 1px;
  font-size: 43px;
  font-family: 'Poppins';
  font-weight: bold;
`

const Lot = styled.h1`
  color: #fff;
  font-size: 15px;
  font-family: 'Poppins';
  font-weight: bold;
  @media screen and (max-width: 768px) { 
   font-size: 15px;
  }
` 

const Lit = styled.h1`
  margin-left: 20px;
  color: #fff;
  font-size: 22px;
  font-family: 'Poppins';
  font-weight: bold;
`

const Lat = styled.h1`
  margin-left: 20px;
  color: #fff;
  font-size: 22px;
  font-family: 'Poppins';
  font-weight: bold;
  transform: translateX(-10px);
`

const Lut = styled.h1`
  margin-right: 34px;
  color: #fff;
  font-size: 50px;
  font-family: 'Poppins';
  font-weight: bold;
`

const Hr = styled.hr`
  top: 0;
  bottom: 0;
  background-color: #fff;
  border-top: 3px solid;
  border-color: transparent;
`

const Button = styled.button`
   font-family: 'Poppins';
   background-color: transparent;
   background: -webkit-linear-gradient(top, #677d93, #996dbf);
   height: 2.68rem;
   min-width: 5.5rem;
   outline: 1px solid;
   outline-color: #fff;
   margin-top: 15px;
   color: #fff;
   font-size: 1.125rem;
   font-weight: 500;
   border-radius: 3px;
   border: 1px solid transparent;
   @media screen and (max-width: 768px) { 
    height: 3.5rem;
    border-radius: 8px;
    min-width: 10.5rem;
    font-size: 1.85rem;
   }
`


const Input = styled.input`
    font-family: 'Poppins';
    background-color: #0000;
    border-radius: 3px;
    width: 40%;
    height: 52%;
    border: 2px solid;
    border-color: #fff;
    color: #fff;
    font-size: 1.125rem;
   @media screen and (max-width: 768px) { 
    height: 3.5rem;
    border-radius: 8px;
    min-width: 17.5rem;
    font-size: 1.85rem;
   }
`


const Linear = styled.img`
 width: 9%;
 height: 90%;
 @media screen and (max-width: 768px) { 
    margin-right: 30px;
    height: 280px;
  }
`

function Yup() {

 return (
  <Flex
  flexDirection='column'
  display='flex'
  alignItems='center'
  minH='100vh'
  >
  <Tow>
   <Tew> 
    <Linear src='/bar.png'/>
    <Text>
     <Typography>Voice Feature</Typography>
     <span/>
     <Online>Chat Feature</Online>
     <span/>
     <Typography>Picture Feature</Typography>
     <span/>
     <Typography>Voice Feature</Typography>
    </Text>  
    </Tew>
    <Flex width='100px'></Flex>
    <Tom>
    <Laun>Launching Soon</Laun>
    <Box 
     display='flex'
     flexDirection='row'
     ml='30px'
     mb='-45px'
     mt='-45px'
    >
     <Lut>87</Lut>
     <Lut>20</Lut>
     <Lut>54</Lut>
    </Box> 
    <Box 
     display='flex'
     flexDirection='row'
     mr='-15px'
     mt='-15px'
    >
     <Lat>DAYS</Lat>
     <Lit>HOURS</Lit>
     <Lit>MINUTES</Lit>
    </Box>
    <Lot>We'll let you know when we are launching</Lot>
    <Par>
    <Input placeholder='Email Address'/>
    <Button>
      Notify Me
    </Button>
    </Par>
    </Tom>
    </Tow>
  </Flex> 
  )
}

export default Yup
