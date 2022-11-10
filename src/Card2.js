import React from "react";
import ReactCardFlipper from "react-card-flipper";
import Card1 from "../src/image/Card1.jpg";
import { Flex, Spacer, Heading , Text, Button} from '@chakra-ui/react'
export default function Card2({image}) {

  return (
    <div class="flip-container" ontouchstart="this.classList.toggle('hover');" >
	<div class="flipper">
		<div class="front" style={{ background:"black"}}>
        <img src={image} alt="My logo"/>
		</div>
		<div class="back">
			<Flex flexDir="column" bg="orangered" color="white" >
                <Heading fontWeight={"normal"}  textAlign="center" mt="11%"  color="white">PR- PUBLIC / MEDIA RELATION
</Heading>
<Text mt="8%" w="60%" mx="auto" color="white">Public Relations (PR) is the act of dealing with the spread of

</Text >
<Button my="10%"  w="60%"  mx="auto" bg="red">Know More</Button>
                </Flex>
		</div>
	</div>
</div>
  );
}
