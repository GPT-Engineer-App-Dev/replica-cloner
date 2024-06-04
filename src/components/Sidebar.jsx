import { Box, VStack, Text, Icon } from "@chakra-ui/react";
import { FaHome, FaCompass, FaHistory, FaPlay, FaHeart, FaClock, FaMusic, FaFilm, FaGamepad, FaNewspaper, FaPodcast } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box bg="white" w="240px" p={4} boxShadow="md" h="100vh" position="fixed">
      <VStack align="start" spacing={4}>
        <Link to="/">
          <Flex align="center">
            <Icon as={FaHome} boxSize={6} />
            <Text ml={4}>Home</Text>
          </Flex>
        </Link>
        <Link to="/shorts">
          <Flex align="center">
            <Icon as={FaCompass} boxSize={6} />
            <Text ml={4}>Shorts</Text>
          </Flex>
        </Link>
        <Link to="/subscriptions">
          <Flex align="center">
            <Icon as={FaPlay} boxSize={6} />
            <Text ml={4}>Subscriptions</Text>
          </Flex>
        </Link>
        <Text fontWeight="bold" mt={4}>You</Text>
        <Link to="/library">
          <Flex align="center">
            <Icon as={FaHistory} boxSize={6} />
            <Text ml={4}>Library</Text>
          </Flex>
        </Link>
        <Link to="/history">
          <Flex align="center">
            <Icon as={FaClock} boxSize={6} />
            <Text ml={4}>History</Text>
          </Flex>
        </Link>
        <Link to="/playlists">
          <Flex align="center">
            <Icon as={FaPlay} boxSize={6} />
            <Text ml={4}>Playlists</Text>
          </Flex>
        </Link>
        <Link to="/liked-videos">
          <Flex align="center">
            <Icon as={FaHeart} boxSize={6} />
            <Text ml={4}>Liked Videos</Text>
          </Flex>
        </Link>
        <Text fontWeight="bold" mt={4}>Explore</Text>
        <Link to="/trending">
          <Flex align="center">
            <Icon as={FaCompass} boxSize={6} />
            <Text ml={4}>Trending</Text>
          </Flex>
        </Link>
        <Link to="/music">
          <Flex align="center">
            <Icon as={FaMusic} boxSize={6} />
            <Text ml={4}>Music</Text>
          </Flex>
        </Link>
        <Link to="/movies">
          <Flex align="center">
            <Icon as={FaFilm} boxSize={6} />
            <Text ml={4}>Movies</Text>
          </Flex>
        </Link>
        <Link to="/gaming">
          <Flex align="center">
            <Icon as={FaGamepad} boxSize={6} />
            <Text ml={4}>Gaming</Text>
          </Flex>
        </Link>
        <Link to="/news">
          <Flex align="center">
            <Icon as={FaNewspaper} boxSize={6} />
            <Text ml={4}>News</Text>
          </Flex>
        </Link>
        <Link to="/sports">
          <Flex align="center">
            <Icon as={FaPodcast} boxSize={6} />
            <Text ml={4}>Sports</Text>
          </Flex>
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;