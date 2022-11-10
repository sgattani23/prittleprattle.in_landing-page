import logo from './logo.svg';
import './App.css';
import Card from "./Card"
import Card2 from "./Card2"
import Navbar from "./Navbar"
import { ChakraProvider } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import Carousel from "./Carousel"
import Footer from "./Footer"
import Accord from './Accord';
import Advert from './Advert';
import ScrollToTop from "react-scroll-to-top";
import Ca2 from './Ca2';
import NewsLetter from "./NewsLetter"

import Card1 from "../src/image/Card1.jpg";
import Card22 from "../src/image/Card22.jpg";
import Card3 from "../src/image/Card3.png";
import Card4 from "../src/image/Card4.png";
import Card5 from "../src/image/Card5.png";
import Card6 from "../src/image/Card6.jpg";
import Card7 from "../src/image/Card7.png";
import Card8 from "../src/image/Card8.png";
import Card9 from "../src/image/Card9.png";
function App() {
  return (
    <div className="App">
      <ScrollToTop smooth color="#000000" />
      <ChakraProvider>
        <Navbar />
        <Carousel />

        <Grid templateColumns='repeat(3, 1fr)' gap={2} ml="4%" mt="3%">
          <Card2 image={Card1} />
          <Card2 image={Card22}/>
          <Card2 image={Card3}/>
        </Grid>

        <Grid templateColumns='repeat(3, 1fr)' gap={2} ml="4%" mt="3%">
          <Card2 image={Card4}/>
          <Card2  image={Card5}/>
          <Card2  image={Card6}/>
        </Grid>

        <Grid templateColumns='repeat(3, 1fr)' gap={2} ml="4%" mt="3%" >
        <Card2 image={Card7}/>
          <Card2  image={Card8}/>
          <Card2  image={Card9}/>
        </Grid>


        <Advert />

        <iframe width="100%" height="600px" src="https://www.youtube.com/embed/JASE8JCvNcA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Accord/>
      
       <NewsLetter/>
        <Footer />
        <Ca2 />
      </ChakraProvider>

    </div>
  );
}

export default App;
