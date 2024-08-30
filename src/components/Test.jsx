import React from 'react'
import {
    Card,
    CardBody,
    Image,
    Stack, // Ensure the Stack component is imported
    Heading,
    Text,
    Divider,
    CardFooter,
    ButtonGroup,
    Button,
} from '@chakra-ui/react'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const projects = [
    {
        title: 'Living room Sofa',
        description:
            'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
        imageUrl:
            "212.png", price: '$450',
        githubLink: 'https://github.com/yourusername/project-repo',
        liveDemoLink: 'https://your-live-project-link.com',
    },
    {
        title: 'Living room Sofa',
        description:
            'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
        imageUrl:
            "212.png", price: '$450',
        githubLink: 'https://github.com/yourusername/project-repo',
        liveDemoLink: 'https://your-live-project-link.com',
    },
    // {
    //     title: 'Living room Sofa',
    //     description:
    //         'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
    //     imageUrl:
    //         "212.png", price: '$450',
    //     githubLink: 'https://github.com/yourusername/project-repo',
    //     liveDemoLink: 'https://your-live-project-link.com',
    // },
    // {
    //     title: 'Living room Sofa',
    //     description:
    //         'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
    //     imageUrl:
    //         "212.png", price: '$450',
    //     githubLink: 'https://github.com/yourusername/project-repo',
    //     liveDemoLink: 'https://your-live-project-link.com',
    // },
    // {
    //     title: 'Living room Sofa',
    //     description:
    //         'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
    //     imageUrl:
    //         "212.png", price: '$450',
    //     githubLink: 'https://github.com/yourusername/project-repo',
    //     liveDemoLink: 'https://your-live-project-link.com',
    // },
    // {
    //     title: 'Living room Sofa',
    //     description:
    //         'This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.',
    //     imageUrl:
    //         "212.png", price: '$450',
    //     githubLink: 'https://github.com/yourusername/project-repo',
    //     liveDemoLink: 'https://your-live-project-link.com',
    // },
];
import "./Test.css";
function Test() {
    return (
        <div className=" md:justify-center ">
            <div className="flex flex-col md:flex-row md:justify-center md:space-x-4 md:overflow-x-auto overflow-x-auto px-4 py-8 custom-scrollbar">
                {/* for multiple project in laptopn md:overflow-x-scroll for scroll bar */}
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        maxW={{ base: '80%', md: 'sm' }}
                        className="flex-shrink-0 m-2 bg-transparent border opacity-85 border-gray-200 rounded-lg shadow-lg overflow-hidden hover:bg-black hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                        <CardBody className="bg-[#3c0d67b0] rounded-sm text-white">
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                borderRadius="lg"
                                className="transition-transform duration-300 transform hover:scale-105 w-64 h-64"
                            />
                            <Stack mt="6" spacing="3">
                                <Heading size="md" className="text-gray-200 hover:text-shadow-lg transition-colors duration-300">
                                    {project.title}
                                </Heading>
                                <Text className="text-gray-400">{project.description}</Text>
                                {/* <Text color="blue.600" fontSize="2xl">
                                    {project.price}
                                </Text> */}
                            </Stack>
                        </CardBody>
                        <CardFooter className="bg-[#3c0d67b0] rounded-sm">
                            <ButtonGroup spacing="2">
                                <Button as="a" href={project.githubLink} target="_blank" rel="noopener noreferrer" variant="ghost" colorScheme="black">
                                    <FaGithub className="h-8 w-8 hover:scale-125" />
                                </Button>
                                <Button as="a" href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" variant="solid" colorScheme="blue">
                                    <FaExternalLinkAlt className="h-4 w-4 hover:scale-125" />
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>  

    )
}

export default Test

{/* <div className="overflow-x-auto flex md:justify-center">
            <div className="flex flex-col md:flex-row  md:space-x-4 md:overflow-x-scroll overflow-x-auto px-4 py-8">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        maxW={{ base: '80%', md: 'sm' }}
                        className="flex-shrink-0 m-2 bg-transparent border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:bg-gray-800 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                        <CardBody className="bg-[#3c0d67b0] rounded-sm text-white">
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                borderRadius="lg"
                                className="transition-transform duration-300 transform hover:scale-105 w-64 h-64"
                            />
                            <Stack mt="6" spacing="3">
                                <Heading size="md" className="text-gray-200 hover:text-shadow-lg transition-colors duration-300">
                                    {project.title}
                                </Heading>
                                <Text className="text-gray-400">{project.description}</Text>
                                {/* <Text color="blue.600" fontSize="2xl">
                                    {project.price}
                                </Text> 
                            </Stack>
                        </CardBody>
                        <CardFooter className="bg-[#3c0d67b0] rounded-sm">
                            <ButtonGroup spacing="2">
                                <Button as="a" href={project.githubLink} target="_blank" rel="noopener noreferrer" variant="ghost" colorScheme="black">
                                    <FaGithub className="h-8 w-8 hover:scale-125" />
                                </Button>
                                <Button as="a" href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" variant="solid" colorScheme="blue">
                                    <FaExternalLinkAlt className="h-4 w-4 hover:scale-125" />
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div> */}