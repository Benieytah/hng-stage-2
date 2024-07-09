// pages/cart.js
import {
  Box,
  Button,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from "@chakra-ui/react";
import dell from '@/assets/dell.png';
import alienware from '@/assets/alienware.png';
import Link from "next/link";
import Image from "next/image";

const CartPage = () => {
 
  return (
    <Box p={4}>
      <Text  fontSize="4xl" mb={8}>Cart</Text>
      <Flex direction={{ base: "column", lg: "row" }} justifyContent="space-between">
        <Box flex="2" mr={{ lg: 4 }}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Item details</Th>
                <Th>Quantity</Th>
                <Th>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              <CartItem
                image={dell}
                name="Dell Vostro 15"
                price={900}
              />
              <CartItem
                image={alienware}
                name="Alienware x15"
                price={900}
              />
            </Tbody>
          </Table>
        </Box>

        <Box
          flex="1"
          mt={{ base: 4, lg: 0 }}
          p={4}
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
        >
          <Text as="b" size="md" mb={4}>Cart summary</Text>
          <Flex justify="space-between" mb={2}>
            <Text>2 Items</Text>
            <Text>$1800.00</Text>
          </Flex>
          <Flex justify="space-between" mb={2}>
            <Text>Subtotal</Text>
            <Text>$1800.00</Text>
          </Flex>
          <Flex justify="space-between" mb={4}>
            <Text>Total</Text>
            <Text>$1800.00</Text>
          </Flex>
          <Link href="./products/checkout">
          <Button colorScheme="blue" width="full">Confirm order</Button></Link>
        </Box>
      </Flex>
    </Box>
  );
};

const CartItem = ({ image, name, price }) => {
  console.log("hello world");
  return (
    <Tr>
      <Td>
        <Flex align="center">
          <Image src={image} boxSize="100px" alt={name} mr={4} />
          <Box>
            <Text size="sm">{name}</Text>
            <Button variant="link" colorScheme="red" mt={2}>REMOVE</Button>
          </Box>
        </Flex>
      </Td>
      <Td>
        <Flex align="center">
          <Button>-</Button>
          <Box mx={2}>1</Box>
          <Button>+</Button>
        </Flex>
      </Td>
      <Td>${price}.00</Td>
    </Tr>
  );
};

export default CartPage;
