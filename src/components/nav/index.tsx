import React,{ useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { Button } from "@chakra-ui/react";

function Navbar() {

const [bool, setBool] = useState('none')

 function Active() {
    setBool('flex')
    if(bool === 'flex') {
      setBool('none')
    }
  }

const translate = keyframes`
  from {
    transform: translateX(-80px);
  } to {
    transform: translateX(1px);
  } 
`

const Nav = styled.nav`
  height: 45px; 
  display: flex; 
  align-content: center; 
  justify-content: space-between; 
  padding: 0.2rem calc((100vw - 1000px) / 2); 
  z-index: 12; 
`


const BG = styled.div`
  margin-top: 0.7%; 
    @media screen and (max-width: 768px) { 
    display: none; 
  } 
`


const LG = styled.div`
  margin-top: 1.3%; 
  display: none;
  @media screen and (max-width: 768px) { 
    display: flex;
    margin-left: 20px;
  } 
`

  
const NavData = styled.a` 
  color: #fff; 
  font-size: larger;
  display: flex; 
  align-items: center; 
  text-decoration: none; 
  padding: 0 1rem; 
  font-family: 'Poppins', sans-sherif;
  height: 100%; 
  cursor: pointer; 
  &.active { 
    color: #000000; 
  } @media screen and (max-width: 768px) { 
    font-size: 1.5rem; 
    cursor: pointer; 
  } 
`

const NavJot = styled.li` 
  color: #fff; 
  align-items: center; 
  padding: 0 1rem; 
  font-family: 'Poppins', sans-sherif;
  height: 100%; 
  cursor: pointer; 
  &.active { 
    color: #000000; 
  } @media screen and (max-width: 768px) { 
    font-size: 1.5rem; 
    cursor: pointer; 
 }
`


const Bars = styled(FaBars)` 
  display: none; 
  color: #fff; 
  @media screen and (max-width: 768px) { 
    display: block; 
    position: absolute; 
    top: 0; 
    right: 0;
    transform: translate(-100%, 75%); 
    font-size: 1.8rem; 
    cursor: pointer; 
  } 
`

 
const NavActive = styled.div` 
  display: none; 
  background-color: #0000;
  height: 100vh;
  @media screen and (max-width: 768px) { 
    animation: ${translate} 0.3s linear;
    display: ${bool}; 
    background-color: #0000;
    height: 20vh;
    flex-direction: column;
    margin-top: 30px; 
  } 
`

const NavMenu = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center; 
  margin-right: -24px; 
  @media screen and (max-width: 768px) { 
    display: none; 
  } 
`

  
const NavBtn = styled.nav` 
  display: flex; 
  align-items: center; 
  margin-right: 24px; 
  @media screen and (max-width: 768px) { 
    display: none; 
  } 
`

  
const NavBtnConnect = styled.button` 
  border-radius: 5px; 
  background: rgb(42 220 45 / 0%);
  padding: 10px 22px; 
  color: #c5c5c5; 
  outline: 1px solid;
  outline-color: #c5c5c5;
  border: none; 
  cursor: pointer; 
  transition: all 0.2s ease-in-out; 
  text-decoration: none; 
  font-family: 'Poppins', sans-sherif;
  margin-left: 24px; 
  &:hover { 
    transition: all 0.2s ease-in-out; 
    background: #fff; 
    color: #808080; 
  } 
`

  function Link1() {
   window.open('https://bit.ly/chatgpt-whatsapp');
  }

  function Link2() {
   window.open('https://');
  }

  function Link3() {
   window.open('https://dsc.gg/turing');
  }

  function Contact() {
   window.open('https://');
  }

  return ( 

    <> 
      <Nav> 
        <Bars onClick={ Active } />
        <BG>
         <img alt='Logo' src='/turing-mix.svg' width='145'/>
        </BG>
        <LG>
         <img alt='Logo' src='/TURING-AI.svg' width='120'/>
        </LG>
        <NavMenu>  
          <NavData href='https://bit.ly/chatgpt-whatsapp'>Bot WhatsApp</NavData> 
          <NavData href='https://t.me/'>Bot Telegram</NavData> 
          <NavData href='https://dsc.gg/turing'>Bot Discord</NavData>  
        </NavMenu> 
        <NavBtn> 
      <Button
      fontFamily='Poppins'
      bgColor='transparent'
      mb='3'
      height='2.5rem'
      minWidth='7.3rem'
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
      Contact
    </Button>
        </NavBtn> 
      </Nav> 
     <NavActive>
          <NavJot onClick={ Link1 }>Bot WhatsApp</NavJot> 
          <NavJot onClick={ Link2 }>Bot Telegram</NavJot> 
          <NavJot onClick={ Link3 }>Bot Discord</NavJot> 
          <NavJot onClick={ Contact }>Contact</NavJot> 
     </NavActive>
    </> 

  )
}

  

export default Navbar
