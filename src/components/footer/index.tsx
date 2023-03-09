import React from 'react'
import styled from 'styled-components'

const Foot = styled.div`
  height: 45px; 
  display: flex;
  background-color: #00000;
  padding: 0.2rem calc((100vw - 1000px) / 2); 
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) { 
   margin-top: 50px;
   flex-direction: column;
   justify-content: center;
   align-items: center;
  }
`

const Flex = styled.div`
  display: flex;
  padding: 0.2rem calc((100vw - 1000px) / 2); 
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
 width: 15%; 
 @media screen and (max-width: 768px) { 
    width: 40%;
    margin-left: 15px;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;
  }
`

const Red = styled.img`
 width: 20%; 
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
