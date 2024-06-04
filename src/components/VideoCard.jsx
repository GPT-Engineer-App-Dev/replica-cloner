import { Box, Image, Text, Flex } from "@chakra-ui/react";

const VideoCard = ({ thumbnail, title, channel, views, time }) => {
  return (
    <Box w="100%" maxW="360px" mb={4}>
      <Image src={thumbnail} alt={title} borderRadius="md" />
      <Flex mt={2} align="start">
        <Image src="/images/profile-pic.png" alt={channel} boxSize="36px" borderRadius="full" mr={2} />
        <Box>
          <Text fontWeight="bold" noOfLines={2}>{title}</Text>
          <Text fontSize="sm" color="gray.500">{channel}</Text>
          <Text fontSize="sm" color="gray.500">{views} • {time}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default VideoCard;