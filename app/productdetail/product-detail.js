"use client"
// app/productdetail/product-detail.js
import { Box, Image, Text, Heading, Flex, Button, IconButton, HStack, List, ListItem } from '@chakra-ui/react';
import { FaStar, FaRegStar, FaHeart } from 'react-icons/fa';
import { useState } from 'react';

const ProductDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <Text>Product not found</Text>;
  }

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity > 1 ? quantity - 1 : 1);
    }
  };

  return (
    <Box p={10}>
      <Flex direction={['column', 'row']} spacing={10}>
        <Box flex="1">
          <Image src={product.image} alt={product.name} width={250} height={250} />
        </Box>
        <Box flex="1" pl={[0, 10]}>
          <Heading as="h2" size="lg">{product.name}</Heading>
          <HStack spacing={1}>
            {[...Array(5)].map((_, i) => (
              <Box key={i}>
                {i < product.rating ? <FaStar color="gold" /> : <FaRegStar color="gray" />}
              </Box>
            ))}
          </HStack>
          <Text fontSize="xl" mt={4}>$ {product.price}</Text>
          <Box mt={4}>
            <Text fontWeight="bold">Details</Text>
            <Text>Brand: {product.brand}</Text>
            <Text>Product code: {product.code}</Text>
            <Text>Colour: {product.color}</Text>
          </Box>
          <Flex mt={4} alignItems="center">
            <IconButton icon={<FaHeart />} variant="outline" aria-label="Save for later" />
            <Flex ml={4} alignItems="center">
              <Button size="sm" onClick={() => handleQuantityChange('decrease')}>-</Button>
              <Text mx={4}>{quantity}</Text>
              <Button size="sm" onClick={() => handleQuantityChange('increase')}>+</Button>
            </Flex>
          </Flex>
          <Button colorScheme="blue" mt={4}>Add to cart</Button>
        </Box>
      </Flex>
      <Box mt={10}>
        <Heading as="h3" size="md">ABOUT THIS ITEM</Heading>
        <List spacing={2} mt={4}>
          {product.details.map((detail, index) => (
            <ListItem key={index}>{detail}</ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ProductDetail;

