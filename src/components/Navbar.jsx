import { Box, Flex, IconButton, Input, InputGroup, InputLeftElement, Spacer, Image } from "@chakra-ui/react";
import { FaSearch, FaMicrophone, FaBell, FaVideo, FaTh } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="white" px={4} py={2} boxShadow="md">
      <Flex alignItems="center">
        <Link to="/">
          <Image src="/images/youtube-logo.png" alt="YouTube Logo" boxSize="40px" />
        </Link>
        <Spacer />
        <InputGroup maxW="600px" mx={4}>
          <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
          <Input type="text" placeholder="Search" />
        </InputGroup>
        <IconButton aria-label="Search" icon={<FaSearch />} mx={2} />
        <IconButton aria-label="Microphone" icon={<FaMicrophone />} mx={2} />
        <Spacer />
        <IconButton aria-label="Create" icon={<FaVideo />} mx={2} />
        <IconButton aria-label="Apps" icon={<FaTh />} mx={2} />
        <IconButton aria-label="Notifications" icon={<FaBell />} mx={2} />
        <Image src="/images/profile-pic.png" alt="Profile" boxSize="40px" borderRadius="full" />
      </Flex>
    </Box>
  );
};

export default Navbar;