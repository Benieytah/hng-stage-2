"use client"
import { Box, Text, Link, Flex, Stack, Icon, Button } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import email from '@/assets/email.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <Box bg="#EBECEF"  mt={10}  className="footer">
      <Box textAlign="center" mb={10}>
      <Image
                  width="auto"
                  height="auto"
                  src={email}
                  alt="email-icon"
                  style={{
                    width: '44px',
                    height: '30px',
                    objectFit: 'contain',
                    marginInline:'42rem',
                  }}
                />
        <Text fontSize="20.73px" mt={4} textAlign="center" textColor="#4E4E4F" fontWeight="800">
          DO YOU WANT TO CONTACT AN AGENT?<br/>
        </Text>
        <Text fontSize="20.73px" > click to send an email</Text>
        <Button mt={4} border="1.66px solid #4E4E4 " borderRadius="32.33px" textColor="#4E4E4F" bg>
          <Link href="mailto:banterwithbenieytah@gmail.com">
          Contact 
          </Link>
        </Button> 
      </Box>
      <Flex
        bg="#052E70"
        color="white"
        direction={['column', 'row']}
        justify="space-between"
        align="center"
        px={[4, 8, 16]}
        py={10}
      >
        <Box width="1000px" height="250px" top="200px" gap="0px" opacity="0px"  className="footer" >
          <Box  width= "240px" height="169px" top="80px" left="80px" gap="0px" border="1px 0px 0px 0px" opacity="0px" textColor="#FFFFFF">
           <Text>Imagination world, Manchester, Kentucky 39495</Text>
          <Text mt={2}>
            <Box as="span" color="green.400" fontWeight="bold" background="#FFFFFF1A" radius="100px"
            >
              ●  
            </Box>{' '}
            Systems running smoothly
          </Text>
          <Flex mt={4} justify={['center', 'flex-start']}>
            <Link href="#" mx={2} aria-label="Facebook">
              <Icon as={FaFacebook} boxSize={6} />
            </Link>
            <Link href="#" mx={2} aria-label="Twitter">
              <Icon as={FaTwitter} boxSize={6} />
            </Link>
            <Link href="#" mx={2} aria-label="Instagram">
              <Icon as={FaInstagram} boxSize={6} />
            </Link>
          </Flex>
          </Box>
        </Box>
        <Flex direction={['column', 'row']} top="80px" justify="space-around" w={['100%', '100%']}>
          <Stack direction="column" spacing={2} textAlign={['center','left' ]} mb={[11, 5]}>
            <Text fontWeight="bold">Product</Text>
            <Link href="#">About us</Link>
            <Link href="#">Pricing</Link>
          </Stack>
          <Stack direction="column" spacing={2} textAlign={['center','left' ]} mb={[6, 0]}>
            <Text fontWeight="bold">Company</Text>
            <Link href="#">Contact us</Link>
            <Link href="#">FAQs</Link>
          </Stack>
          <Stack direction="column" spacing={2} textAlign={['center','left' ]} mb={[6, 0]}>
            <Text fontWeight="bold">Resources</Text>
            <Link href="#">Changelog</Link>
            <Link href="#">Cookie Policy</Link>
            <Link href="#">Coming Soon</Link>
            <Link href="#">Error 404</Link>
          </Stack>
          <Stack direction="column" spacing={2} textAlign={['center','left' ]} mb={[6,6]}>
            <Text fontWeight="bold">Utilities</Text>
            <Link href="#">Terms & Conditions</Link>
          </Stack>
        </Flex>
      </Flex>
      <Box bg="#052E70" color="#FFFFFF" textAlign="left" py={4}  border-top="1px" >
        <Text textColor="white">Copyright © 2024 GGtech. All rights reserved.</Text>
      </Box>
    </Box>
  );
};


