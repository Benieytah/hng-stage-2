'use client';
import { useRouter } from 'next/navigation';
import { products } from '@/data/data';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Box, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import Star from '@/assets/Star';
import ProductCard from '../product-card';
import { useAppContext } from '@/context/AppContext';
import { useToast } from '@chakra-ui/react';


const SingleProduct = ({ params }) => {
  const [singleProd, setSingleProd] = useState(null);
  const [similarProduct, setSimilarProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const {
    incrementCart,
    decrementCart,
    setCartItems,
    cartItems,
    setShowToast,
    addItemToCart,
  } = useAppContext();
  const totalRatings = 5;
  const toast = useToast()

  useEffect(() => {
    const desiredProduct = products.find((p) => p.slug === params.products);
    setSingleProd(desiredProduct);

    if (desiredProduct) {
      const similarProd = products.filter(
        (p) =>
          p.category === desiredProduct.category && p.id !== desiredProduct.id
      );
      setSimilarProduct(similarProd);
    }
  }, [params.products, products]);

  const increaseQuanity = () => {
    // incrementCart();
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    // decrementCart();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = (id) => {
    setCartItems(cartItems + quantity);
    setShowToast(true);
    addItemToCart(id);
    toast({
      title: 'Wonderful',
      description: "Your item(s) has successfully been added to cart",
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
  };

  if (!singleProd) {
    return 'No Products Found';
  }

  return (
    <main className="single-product-page">
      <section className="section-single-prod">
        <div className="section-container">
          <Flex justifyContent="space-between">
            <Box
              width="610px"
              borderRadius="10px"
              background="#F3F3F3"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={singleProd.image}
                alt={singleProd.name}
                width={400}
                height={360}
              />
            </Box>
            <Flex width="413px" flexDirection="column" alignItems="flex-start">
              <Text fontSize="32px" fontWeight="700" color="#052E70">
                {singleProd.name}
              </Text>
              <Flex alignItems="center" marginTop="16px">
                {[...Array(totalRatings).keys()].map((_, index) => (
                  <div
                    key={index}
                    className={`${
                      index < singleProd.review ? 'active' : ''
                    } star`}
                  >
                    <Star />
                  </div>
                ))}
                <Text
                  marginLeft="8px"
                  fontSize="14px"
                  fontWeight="400"
                  lineHeight="20px"
                  color="#4e4e4f"
                >
                  12 Reviews
                </Text>
              </Flex>
              <Text
                className="secondary-font"
                fontSize="18px"
                lineHeight="25px"
                fontWeight="400"
                color="#4e4e4f"
                marginTop="12px"
              >
                Details
              </Text>
              <Flex gap="80px" marginTop="20px">
                <Flex flexDirection="column" gap="8px">
                  <Text
                    color="#4e4e4f"
                    fontWeight="400"
                    lineHeight="23px"
                    fontSize="14px"
                    className="secondary-font"
                  >
                    Brand
                  </Text>
                  <Text
                    color="#4e4e4f"
                    fontWeight="500"
                    lineHeight="23px"
                    fontSize="14px"
                    className="secondary-font"
                  >
                    {singleProd.details.brand}
                  </Text>
                </Flex>
                <Flex flexDirection="column" gap="8px">
                  <Text
                    color="#4e4e4f"
                    fontWeight="400"
                    lineHeight="23px"
                    fontSize="14px"
                    className="secondary-font"
                  >
                    Product code
                  </Text>
                  <Text
                    color="#4e4e4f"
                    fontWeight="500"
                    lineHeight="23px"
                    fontSize="14px"
                    className="secondary-font"
                  >
                    {singleProd.details.productCode}
                  </Text>
                </Flex>
                <Flex flexDirection="column" gap="8px">
                  <Text
                    color="#4e4e4f"
                    fontWeight="400"
                    lineHeight="23px"
                    fontSize="14px"
                    className="secondary-font"
                  >
                    Colour
                  </Text>
                  <Text
                    color="#4e4e4f"
                    fontWeight="500"
                    lineHeight="23px"
                    fontSize="14px"
                    textTransform="capitalize"
                    className="secondary-font"
                  >
                    {singleProd.details.color}
                  </Text>
                </Flex>
              </Flex>
              <hr className="divider" />
              <Text
                fontWeight="700"
                fontSize="28px"
                lineHeight="32px"
                color="#4e4e4f"
                marginTop="20px"
              >
                ${singleProd.price.toFixed(2)}
              </Text>
              <hr className="divider" />
              <Flex
                height="34px"
                borderRadius="3px"
                overflow="hidden"
                marginTop="21px"
                style={{ boxShadow: '0px 1px 5px -1px rgba(0, 0, 0, 0.2)' }}
              >
                <button onClick={decreaseQuantity} className="minus">
                  &#8722;
                </button>
                <div className="quantity">{quantity}</div>
                <button onClick={increaseQuanity} className="plus">
                  &#43;
                </button>
              </Flex>
              <button
                onClick={() => addToCart(singleProd.id)}
                className="atc-btn"
              >
                Add to cart
              </button>
            </Flex>
          </Flex>
        </div>
      </section>
      <section className="section-product-description">
        <div className="section-container">
          <Text
            letterSpacing="0px"
            textTransform="uppercase"
            fontWeight="400"
            fontSize="30px"
            lineHeight="34px"
            color="#4e4e4f"
          >
            About this item
          </Text>
          <div
            className="product-description"
            dangerouslySetInnerHTML={{ __html: singleProd.desc }}
          />
        </div>
      </section>
      <section className="section-similar-products">
        <div className="section-container">
          <Text
            letterSpacing="0px"
            textTransform="uppercase"
            fontWeight="400"
            fontSize="30px"
            lineHeight="34px"
            color="#4e4e4f"
          >
            Similar Products
          </Text>
          <Box marginTop="32px">
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={5}>
              {similarProduct.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </SimpleGrid>
          </Box>
        </div>
      </section>
    </main>
  );
};

export default SingleProduct;