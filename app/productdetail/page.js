// app/products/[slug]/page.js
import { notFound } from 'next/navigation';
import { Box } from '@chakra-ui/react';
import ProductDetail from './product-detail';
import { products } from '../../data/product-data';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

const ProductPage = ({ params }) => {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <Box>
      <ProductDetail product={product} />
    </Box>
  );
};

export default ProductPage;


