"use client"
import { Box, Button, Flex, Stack, Text, useToast} from "@chakra-ui/react";
import Image from "next/image";
import check from '@/assets/check.svg';
import arrow from '@/assets/arrow.svg';
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Checkout = () => {
  const toast = useToast();
  const router = useRouter();

  const handleCheckout = () => {

    toast({
      title: "Success",
      description: "Your order has been placed successfully.",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
        });
        setTimeout(() => {
          router.push('/')
        }, 2000);
  };



  return (
    <Box maxW="1200px" mx="auto" p={4} >
      <Link href="./">
        <Image
                width="auto"
                height="auto"
                src={arrow}
                alt="arrow-icon"
                style={{
                  borderRadius: '40%',
                  width: '30px',
                  height: '30px',
                  objectFit: 'cover',
                  marginRight: '0.5rem',
                }}
              /> </Link>
      <Text fontSize="4xl" mb={2} textAlign="center">Checkout</Text>
      <Flex justify="space-between" flexDirection={["column", "column", "row"]}>
        <Box  w={["100%", "100%", "60%"]}  >
          <Stack spacing={4}>
            <Box bg="#F3F3F3" border="1px solid #E2E8F0" p={4} borderRadius="md">
              <Flex align="center">
              <Image
                width="auto"
                height="auto"
                src={check}
                alt="checkcircle-icon"
                style={{
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  objectFit: 'cover',
                  marginRight: '0.8rem',
                }}
              />
                <Text fontSize="xl" size="md">1. CUSTOMER ADDRESS</Text>
              </Flex>
              <Text mt={2}>Flap Jack</Text>
              <Text>Imaginary road, Manchester, Kentucky 3945</Text>
              <Text>234 125 0372</Text>
            </Box>
            <Box bg="#F3F3F3" border="1px solid #E2E8F0" p={4} borderRadius="md">
              <Flex align="center">
              <Image
                width="auto"
                height="auto"
                src={check}
                alt="checkcircle-icon"
                style={{
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  objectFit: 'cover',
                  marginRight: '0.8rem',
                }}
              />
                <Text fontSize="xl" size="md">2. DELIVERY DETAILS</Text>
              </Flex>
              <Text mt={2}>Door delivery</Text>
              <Text>Between 5 July and 10 July</Text>
            </Box>
            <Box bg="#F3F3F3"border="1px solid #E2E8F0" p={4} borderRadius="md">
              <Flex align="center">
              <Image
                width="auto"
                height="auto"
                src={check}
                alt="checkcircle-icon"
                style={{
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  objectFit: 'cover',
                  marginRight: '0.8rem',
                }}
              />
                <Text fontSize="xl" size="md" align="right">3. PAYMENT METHOD</Text>
              </Flex>
              <Text mt={2}>Pay with cash on delivery</Text>
            </Box>
          </Stack>
        </Box>
        <Box w="360px" h="250px" p={4} border="1px solid #E2E8F0" borderRadius="md" mt={[4, 4, 0]}>
        <Flex justify="space-between">
          <Text fontSize="xl" size="md" mb={4}>Cart summary</Text>
          <Text>1 Item</Text>
          </Flex>
          <Stack spacing={2}>
            <Flex justify="space-between">
              <Text>Subtotal</Text>
              <Text>$900.00</Text>
            </Flex>
            <Flex justify="space-between">
              <Text>Total</Text>
              <Text>$900.00</Text>
            </Flex>
            <Text fontSize="sm" color="gray.500" textAlign="right">Excluding delivery charges</Text>
            <Button bg="#052E70"
             textColor="#FFFFFF" 
            mt={4} 
            _hover={{ textDecoration: 'none' }}
            onClick={handleCheckout}
            >Checkout</Button>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Checkout;
