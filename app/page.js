"use client"
import { Box, Text,Button, Heading } from "@chakra-ui/react";
import Image from "next/image";
import heroImg from "@/assets/hero.png";
import featuredImg from "@/assets/featured.png";
import classes from "./page.module.css";
import Link from "next/link";
import ProductsPage from "@/app/products/page";
import DiscountedProductsPage from "./discounts/page";
import TopProductsPage from "./topproducts/page";



export default function HomePage() {
  return(
    <>
    <Box className="hero-section">
    <div className={classes.container}>   
      <div className={classes.text}>
        <span className={classes.new}> NEW<br/>  <span className={classes.dell}>Dell Vostro</span> <br/> </span>
        Always-ready 14-inch laptop that connects you to your world.<br />
        Ideal combination of portability and productivity. They Include<br />
        AMD Ryzen<sup>TM </sup> 5000 series processors.
        <Box >
          <Link href="/products">
        <Button textColor="white"  _hover={{ textDecoration: 'none' }} gap="10px" p= "16px 78px 15px 78px" width="199px" mt={4} bg="#052E70" borderRadius="3px">Buy</Button>
        </Link>
        </Box>
        </div>
       <Image className={classes.back} src={heroImg} alt="A photo of laptop" />
       </div>
       </Box>
      
      <Box textAlign="center" >
      <Text as="b" fontSize="3xl" size="md" mt={5} marginRight="40rem">Our Products</Text>
      </Box>
      <ProductsPage />
     
      <Image src={featuredImg} alt="A photo of featured products" />
      <Box textAlign="center" >
      <Text as="b" fontSize="3xl" size="md" mt={5} marginRight="40rem" >Products On Discount</Text>
        </Box>
        <DiscountedProductsPage />
        <Box textAlign="center" >
        <Text as="b" fontSize="3xl" size="md" mt={3} marginRight="40rem" >Top Products</Text>
        </Box>
      <TopProductsPage />
      
       </>
  );
}

