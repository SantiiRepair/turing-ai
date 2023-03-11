import React from 'react'
import styled from 'styled-components'

const Foot = styled.div`
  display: flex;
  background-color: #00000;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) { 
   margin-top: 50px;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   transform: translateY(-15px);
  } 
`

const Flex = styled.div`
  display: flex;
  z-index: 12;
  @media screen and (max-width: 768px) { 
   flex-direction: row;
   justify-content: center;
   align-items: center;
   margin-bottom: 30px;
  }
`

const Adder = styled.div`
  width: 100%;
  @media screen and (max-width: 820px) { 
     display: none;
  }
`

const Logo = styled.img`
 width: 12%;
 transform: translateX(30px);
 @media screen and (max-width: 768px) { 
    transform: translateX(0px);
    width: 40%;
    margin-left: 15px;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;
  }
`

const Red = styled.img`
 width: 12%; 
 margin-left: 15px;
 @media screen and (max-width: 768px) { 
    max-width: 10%; 
  }
`

function Footer() {
 return (
  <Foot>
   <Logo src='/turing-copyright.svg'/>
   <Adder></Adder>
   <Flex>
    <Red src='/youtube.svg'/>
    <Red src='/bird.svg'/>
    <Red src='/in.svg'/>
    <Red src='/git.svg'/>
   </Flex>
  </Foot>
 )
}

export default Footer
