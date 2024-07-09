
import { Box,Grid, SimpleGrid } from "@chakra-ui/react";

import solar from '@/assets/solar.png';
import dell from "@/assets/dell.png";
import intel from "@/assets/intel.png";
import lenovo from "@/assets/lenovo.png";
import TopProductCard from "./top-product";

  
const topproducts = [
    { name: "Hp evo Intel",
        image:intel, 
        price: 999.0,
        isTop: true  
       },
       { name: "Lenovo",
        image:lenovo, 
        price: 999.0 ,
        isTop: true 
       },
      { 
        name: "Dell Vostro", 
        image:dell, 
        price: 999.0, 
        isTop: true 
    },
    
    {
        name: "Panel solar s547",
        image:solar,
        price: 999.0,
        isTop: true,
      },
  
]

  export default function TopProductsPage(){
    return(
      <Box p={10}>
         <Grid  templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
        <SimpleGrid columns={[1, 2, 3,4]} spacing={5}>
          {topproducts.map((product, index) => (
            <TopProductCard key={index} product={product} />
          ))}
        </SimpleGrid> 
        </Grid>
      </Box>
    );
  };