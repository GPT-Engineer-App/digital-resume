import { Box, Flex, Heading, Text, VStack, Link, Container } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" wrap="wrap">
        <Box p={5}>
          <Heading as="h1" size="xl" mb={2}>Jane Doe</Heading>
          <Text fontSize="lg" color="gray.600">Developer Relations & Community Manager at Lovable</Text>
        </Box>
        <VStack spacing={4} mt={{ base: 4, md: 0 }}>
          <Link href="https://github.com" isExternal><FaGithub size="24px" /></Link>
          <Link href="https://linkedin.com" isExternal><FaLinkedin size="24px" /></Link>
          <Link href="https://twitter.com" isExternal><FaTwitter size="24px" /></Link>
          <Link href="mailto:example@example.com"><FaEnvelope size="24px" /></Link>
        </VStack>
      </Flex>
      <Box as="section" mt={10}>
        <Heading as="h2" size="lg" mb={5}>About</Heading>
        <Text fontSize="md">
          Passionate about building and nurturing tech communities, I have over 10 years of experience in developer relations and community management. I thrive on connecting with developers and tech enthusiasts to foster a collaborative and inclusive environment.
        </Text>
      </Box>
      <Box as="section" mt={10}>
        <Heading as="h2" size="lg" mb={5}>Portfolio</Heading>
        <Text fontSize="md">
          My portfolio showcases various projects and events I have led or contributed to, emphasizing community building and developer engagement.
        </Text>
      </Box>
      <Box as="section" mt={10}>
        <Heading as="h2" size="lg" mb={5}>Blog</Heading>
        <Text fontSize="md">
          Explore my blog for insights into community management, developer relations, and more. I share tips, experiences, and best practices to help you excel in your tech community.
        </Text>
      </Box>
      <Box as="section" mt={10}>
        <Heading as="h2" size="lg" mb={5}>Contact</Heading>
        <Text fontSize="md">
          Interested in collaborating or want to chat? Feel free to reach out via email or connect with me on social media.
        </Text>
      </Box>
    </Container>
  );
};

export default Index;