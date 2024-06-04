import { Box, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";

const Home = () => {
  const videos = [
    {
      thumbnail: "/images/video1.jpg",
      title: "Best Valentine's Day Ever - The Real Bros of Simi Valley (S3E1)",
      channel: "LifeAccordingToJimmy",
      views: "38K views",
      time: "19 hours ago",
    },
    {
      thumbnail: "/images/video2.jpg",
      title: "Mix - Omar Montes: Tiny Desk Concert",
      channel: "Omar Montes, Delaossa, C. Tangana, and more",
      views: "",
      time: "",
    },
    {
      thumbnail: "/images/video3.jpg",
      title: "STARTUP - CEO",
      channel: "Pantomima Full",
      views: "1.3M views",
      time: "2 years ago",
    },
    {
      thumbnail: "/images/video4.jpg",
      title: "FRONT RUNNER - Episode 3: Week in the Warehouse",
      channel: "Front Runner AU",
      views: "470 views",
      time: "8 days ago",
    },
    {
      thumbnail: "/images/video5.jpg",
      title: "6-week MIT Online AI Course",
      channel: "MIT Sloan • MIT CSAIL",
      views: "",
      time: "",
    },
  ];

  return (
    <Box>
      <Navbar />
      <Flex>
        <Sidebar />
        <Box ml="240px" p={4} w="full">
          <VStack align="start" spacing={4}>
            <Text fontSize="2xl" fontWeight="bold">Explore</Text>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
              {videos.map((video, index) => (
                <VideoCard key={index} {...video} />
              ))}
            </SimpleGrid>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;