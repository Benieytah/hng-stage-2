import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/navbar/nav-bar';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from '@/components/footer/footer';
import { AppContextProvider } from '@/context/AppContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Timbu Cloud shop',
  description: 'Shop your modern technologies',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <AppContextProvider>
            <NavBar />
            {children}
            <Footer />
          </AppContextProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
