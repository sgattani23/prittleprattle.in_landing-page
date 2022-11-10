import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Box,
} from "@chakra-ui/react";
import accord from "../src/image/accord.png";

export default function Accord() {
  return (
    <Flex flexDir={"row"} mt="5%">
      <Flex width={"50%"} height={"80%"} ml="5%" >
        <img src={accord} alt="My logo" />
      </Flex>

      <Flex mt="2%">
        <Accordion w="400px">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <b>THE WAY WE WORK</b>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Prittle Prattle develops tailor-made communication campaigns, where it is an independent micro-marketing cell that works towards realizing the growing potential of its clients across all over. This client thinks differently, consumes differently and is gaining spending power. And thus, we reach out to them with not just through PR, but a variety of marketing activities.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
              <b>GETTING EASIER SOLUTIONS</b>  
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Public Relations, Event Management, Celebrity Management, Corporate Communications, and so on 360 degree exposure to the communication business in the entertainment and other related domain Branding Image and Social Media Marketing
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
         <b>WORKING WITH PASSIOM</b> 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    We offer a strategic guidance on corporate image management
PR plan that functions in synergy by means of advert for finest results through fresh and creative method to every PR initiative.Yearly PR plan for to meet the specified aims, coverage in key media vehicles for to recommend the finest options
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          <b>PREPARING THE FILES</b>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    At Prittle Prattle, we become an addition of our clients’ marketing team. As a truly committed public relations agency, our team is passionate in relation to understand your business goals and how we can bring them to fruition through an integrated and focused approach.


    </AccordionPanel>
  </AccordionItem>

        </Accordion>
      </Flex>
    </Flex>
  );
}
