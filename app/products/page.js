import { Box,Grid, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./product-card";
import { products } from "@/data/data";
  

  export default function ProductsPage(){
    return(
      
      <Box p={10}>
          <Grid  templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
        <SimpleGrid columns={[1, 2, 3,4]} spacing={5}>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </SimpleGrid> 
        </Grid>
      </Box>
    );
  };