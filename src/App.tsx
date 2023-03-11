import Navbar from "./components/nav";
import styled from 'styled-components'
import Yep from "./pages/yep";
import Yup from "./pages/yup";
import Footer from "./components/footer"; 
import "./App.css";

function App() {

const Flex = styled.div`
 justify-content: center;
 flex-direction: column;
`

 return (
  <>
   <Flex>
    <Navbar />
    <Yep />
    <Yup />
    <Footer/>
   </Flex>
  </>
  );
}

export default App;
