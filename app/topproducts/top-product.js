"use client"

import { Badge, Box, Button, Flex, IconButton,Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';


export default function TopProductCard({product}) {
    const [liked, setLiked] = useState(false);

    return(
        
        <Box  borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
             <Box bg="#F4F4F4" boxShadow="0px 4px 4px 0px #00000040" width="1,240px" height="296px"
               top="1239px" left="100px" gap="20px" opacity="0px">
            <Image src={product.image} alt={product.name} width={250} height={250} /></Box>
            <Box p={4}>
                <Flex justify="space-between" align="center" >
                    <Box d="flex" alignItems="baseline">
                    {product.isNew && <Badge borderRadius="full" px={2} background="#28A12D" textColor="#FFFFFF">Top</Badge>}
                    {product.isTop && <Badge borderRadius="full" px={2} background="#052E70" textColor="#FFFFFF">Top</Badge>}
                    {product.isSoldout && <Badge borderRadius="full" px={2} background="#010A18" textColor="#FFFFFF">Top</Badge>}
                    {product.isOnSale && <Badge ml={2} borderRadius="full" px={2} background="#BE3838" textColor="#FFFFFF">Top</Badge>}
                    </Box>
                    <IconButton 
                    aria-label="Like Product"
                    icon={liked ? <AiFillHeart /> : <AiOutlineHeart />}
                    onClick={() => setLiked(!liked)}
                    variant="ghost"
                    color="#052E70"
                    />
                </Flex>

                <Box mt={1} fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>{product.name} </Box>
                    <Text>${product.price}</Text>
                    <Button mt={2} color="#6A96CA" size="sm">
                        <Link href="./topproducts">
                        Read more...
                        </Link>
                    </Button>
            </Box>
        </Box>
    ); 
}