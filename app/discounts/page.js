import { Box,Grid, SimpleGrid } from "@chakra-ui/react";

import solar from '@/assets/solar.png';
import dell from "@/assets/dell.png";
import intel from "@/assets/intel.png";
import printer from "@/assets/printer.png";
import DisProductCard from "./dis-product";

  
const discountedproducts = [
    {
        name: "Panel solar s547",
        image:solar,
        price: 999.0,
        salePercentage:25
      },
      { 
        name: "Dell Vostro", 
        image:dell, 
        price: 999.0, 
        salePercentage: 20
    },
    
  {
    name: "Multifunctional Printer",
    image: printer,
    price: 999.0,
    isOnSale: true,
    salePercentage: 10,
  },
  { name: "Hp evo Intel",
     image:intel, 
     price: 999.0 ,
     salePercentage: 10
    },
]

  export default function DiscountedProductsPage(){
    return(
      <Box p={10}>
         <Grid  templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
        <SimpleGrid columns={[1, 2, 3,4]} spacing={5}>
          {discountedproducts.map((product, index) => (
            <DisProductCard key={index} product={product} />
          ))}
        </SimpleGrid> 
        </Grid>
      </Box>
    );
  };