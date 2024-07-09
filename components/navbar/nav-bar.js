'use client';

import Image from 'next/image';
import logoImg from '@/assets/logo.png';
import profilePicture from '@/assets/blackie.jpg';
import cart from '@/assets/cart.svg';
import Link from 'next/link';
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import {
  SearchIcon,
  QuestionOutlineIcon,
  TriangleDownIcon,
} from '@chakra-ui/icons';
import { MdOutlineAccountBox } from 'react-icons/md';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { useAppContext } from '@/context/AppContext';

export default function NavBar() {
  const { cartItems } = useAppContext();
  return (
    <>
      <Box>
        <Flex
          as="header"
          justify="space-between"
          align="center"
          py={4}
          px={8}
          bg="#F3F3F3"
          boxShadow="md"
          // gap="191px"
        >
          <Link href="/">
            <Image
              width={115}
              height={46}
              src={logoImg}
              alt="A logo of GG Tech"
              priority
            />
          </Link>
          <Flex as="form" align="center">
            <InputGroup>
              <Input
                placeholder="Search GagGet"
                borderRadius="md"
                borderWidth="1px"
                borderColor="blue.900"
                _hover={{ borderColor: 'blue.900' }}
                size="md"
                mr={5}
              />
              <InputRightElement>
                <IconButton
                  aria-label="Search"
                  icon={<SearchIcon />}
                  color="white"
                  bg="blue.900"
                  _hover={{ bg: 'blue.900' }}
                  borderRadius="md"
                />
              </InputRightElement>
            </InputGroup>
          </Flex>
          <Flex alignItems="center">
            <Flex>
              <Image
                width="auto"
                height="auto"
                src={profilePicture}
                alt="profile-picture"
                style={{
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  objectFit: 'cover',
                  marginRight: '0.5rem',
                }}
              />
              <Button
                textColor="#4E4E4F"
                variant="link"
                mr={4}
                _hover={{ textDecoration: 'none' }}
                rightIcon={<TriangleDownIcon width="10px" />}
              >
                Account
              </Button>
            </Flex>
              <Link style={{ display: 'flex', position: 'relative', overflow: 'visible' }} className='cart-wrap' href="/carts">
                <Image
                  width="auto"
                  height="auto"
                  src={cart}
                  alt="cart-icon"
                  style={{
                    width: '24px',
                    height: '24px',
                    objectFit: 'contain',
                    marginRight: '0.5rem',
                  }}
                />
                <Button
                  textColor="#4E4E4F"
                  variant="link"
                  _hover={{ textDecoration: 'none' }}
                  mr={4}
                >
                  Cart
                </Button>
                <span className='counter'>{cartItems}</span>
              </Link>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
