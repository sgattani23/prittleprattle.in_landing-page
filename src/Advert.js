import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading } from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

const Feature = ({ title, text }) => {
  return (
    <Stack>
      
      <Heading fontWeight={600}>{title}</Heading>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function Advert() {
  return (
    <Box   ml="5%" my="5%">
      <SimpleGrid columns={5} >
        <Feature
          //   icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={"1000"}
          text={
            "Social Media Campaigns"
          }
        />
        <Feature
          //  icon={<Icon as={FcDonate} w={10} h={10} />}
          title={"500"}
          text={
            "Designs"
          }
        />
        <Feature
          //  icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"300"}
          text={
            "Press Releases"
          }
        />

        <Feature
          //  icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"200"}
          text={
            "Advertisement Strategies"
          }
        />

<Feature
          //  icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"100"}
          text={
            "Advertisement Strategies"
          }
        />
      </SimpleGrid>

      <SimpleGrid columns={4} mt="5%">
       
        <Feature
          //  icon={<Icon as={FcDonate} w={10} h={10} />}
          title={"500"}
          text={
            "Designs"
          }
        />
        <Feature
          //  icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"300"}
          text={
            "Press Releases"
          }
        />

        <Feature
          //  icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"200"}
          text={
            "Advertisement Strategies"
          }
        />

<Feature
          //  icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={"100"}
          text={
            "Advertisement Strategies"
          }
        />
      </SimpleGrid>
    </Box>
  );
}
