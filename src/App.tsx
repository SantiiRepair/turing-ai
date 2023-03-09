import Navbar from "./components/nav";
import Yep from "./pages/yep";
import Footer from "./components/footer";
import { Flex } from '@chakra-ui/react' 
import "./App.css";

function App() {

 return (
  <>
   <Navbar />
   <Flex
      justifyContent='center'
    >
    <Yep />
   </Flex>
   <Footer/>
  </>
  );
}

export default App;
